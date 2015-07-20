# ********************************************************************** #
# CERF PI LUX CENSOR Analysis                                            #
#                                                                        #
# Analysis readings from lux sensors for summary data                    #
#                                                                        #
# Started by Derek De Young                                              #
# Continued by Curtis Kortman											 #
# Started: 4/25/15                                                       #
# Last Edited: 7/13/15                                                   #
# ********************************************************************** #

# **************************IMPORTS************************************* #
import time
import calendar
import datetime
import smbus
import re
import os
import re  #line delimiter
from binClass import*
from datetime import date
from globalVars import*  # Global vars
#<<<<<<< HEAD

#==================================================================
#-------------------Tell the website the pi is busy----------------
#==================================================================

file = open('/home/cjk36/Desktop/CERF-DAQ/WebPage/pages/analysisStatus.txt', "w")
file.write("1")
file.close()

#==================================================================
#------------------------Initialize Variables----------------------
#==================================================================

debug = False # used for helping in development of code, turn to false for normal operation

nameOfPi = str(PI_NUMBER) # From Global Vars 
month_list= ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
#Base directory leading to the summary
summary_path = '/home/cjk36/Desktop/Data/Pi_' + nameOfPi + '_Summary/'
#Base directory leading to the raw
raw_path = '/home/cjk36/Desktop/Data/Pi_' + nameOfPi + '_Raw/'
year = datetime.datetime.strftime(datetime.datetime.now(), '%Y')



#==================================================================
#------------------------Function Definitions----------------------
#==================================================================
					#createDirectories() creates the folders used to organize the data for easier reference 
def createDirectories():
	if not os.path.exists(summary_path + 'Bins/'):
		os.makedirs(summary_path + 'Bins/')
	if not os.path.exists(summary_path + 'Analysis/'):
		os.makedirs(summary_path + 'Analysis/')

#------------------------------------------------------------------

					#initializeSummary() writes the metadata to each file
def initializeSummary(sensor, analysisNumber):
	filename = (summary_path + 'Pi_' + nameOfPi + '_'+ str(sensor.number) + 'a' + str(analysisNumber + 1) + '.csv')
	newfile = open(filename, 'w')
	newfile.write("#Calvin College CERF PI DATA"+ '\n')
	newfile.close()
	return filename

#------------------------------------------------------------------
					
					#delclares the path to the data
def get_full_raw_path(sensor):
	return (raw_path + 'Sensor' + str(sensor.number) + '/' + year + '/')

#------------------------------------------------------------------
					
					#adds one to the month of a datetime object
def addMonth(originalDate):
	month = originalDate.month 
	year = originalDate.year + month / 12 								# if it is december, integer division will cause month / 12 to be 1 and the year to therefore increment
	month = month % 12 + 1 												# now increment the month
	day = min(originalDate.day, calendar.monthrange(year, month)[1])
	return datetime.datetime(year, month, day)

#------------------------------------------------------------------
					
					#finds the difference in months between two dates
def monthsDiff(date1, date2):
	return ((date1.year - date2.year)*12 + date1.month - date2.month)

#------------------------------------------------------------------
					
					#returns the date in a datetime format from a filename
def getDateFromFile(filename):
	datestring = ((filename.split('_')[3]).split('.')[0])
	return datetime.datetime.strptime(datestring, '%Y-%m-%d')

#------------------------------------------------------------------
					
					#returns the date in a datetime format from a datestring
def getDateFromDataString(datastring):
	return datetime.datetime.strptime(datastring, '%Y-%m-%d %H:%M:%S')

#------------------------------------------------------------------
					
					#returns true if the check date is within date1 and date2 (date 2 should be later than date 1)
def dateInRange(checkDate, date1, date2):
	if ((checkDate > date1) and (checkDate < date2)):
		return True
	else:
		return False

#------------------------------------------------------------------
					
					#finds the earliest month for a sensor's data collection
def getFirstYear(sensor):
	years = []
	for name in os.listdir(raw_path + 'Sensor' + str(sensor.number) + '/'):
		years.append(name)
	return min(years)

#------------------------------------------------------------------
					
					#finds the earliest month for a sensor's data collection
def getFirstMonth(sensor, year):
	months = []
	for name in os.listdir(raw_path + 'Sensor' + str(sensor.number) + '/' + year + '/'):
		months.append(name)
	return min(months)

#------------------------------------------------------------------
					
					#finds the earliest day for a sensor's data collection
def getFirstDay(sensor, year, month):
	days = []
	for name in os.listdir(raw_path + 'Sensor' + str(sensor.number) + '/' + year + '/' + month + '/'):
		days.append(name)
	days = ((min(days).split('-')[2]).split('.')[0])
	return days

#------------------------------------------------------------------
					
					#finds the earliest dare of a sensor's data collection
def getFirstDate(sensor):
	firstYear = getFirstYear(sensor)
	firstMonth = getFirstMonth(sensor, firstYear)
	firstDay = getFirstDay(sensor, firstYear, firstMonth)
	return datetime.datetime.strptime(firstYear + ' ' + firstMonth + ' ' + firstDay, "%Y %m %d")

#------------------------------------------------------------------
					
					#creates a list of start and stop times divided by years
def createYearBins(sensor, analysisNumber):
	firstYear = int(getFirstYear(sensor))
	today = datetime.datetime.today()
	endYear = int(today.year)

	startHour = datetime.datetime.strptime("00 00", "%H %M").time()
	endHour = datetime.datetime.strptime("23 59 59", "%H %M %S").time()

	for x in range(endYear-firstYear+1):
		startTime = (str(firstYear) + '-' + "01" + '-' + "01" + ' ' + str(startHour))
		stopTime = (str(firstYear) + '-' + "12" + '-' + str(calendar.monthrange(int(firstYear), 12)[1])+ ' ' + str(endHour))
		binArray[analysisNumber][sensor.number-1].addBin(startTime, stopTime)
		firstYear += 1

#------------------------------------------------------------------

					#creates a list of start and stop times divided by months
def createMonthBins(sensor, analysisNumber):
	firstDate = getFirstDate(sensor)
	today = datetime.datetime.today()

	startHour = datetime.datetime.strptime("00 00", "%H %M").time()
	endHour = datetime.datetime.strptime("23 59 59", "%H %M %S").time()

	for x in range(monthsDiff(today, firstDate)+1):
		startTime = (str(firstDate.year) + '-' + str(firstDate.month) + '-' + "01" + ' ' + str(startHour))
		stopTime = (str(firstDate.year) + '-' + str(firstDate.month) + '-' + str((calendar.monthrange(int(firstDate.year), int(firstDate.month)))[1]) + ' ' + str(endHour))
		binArray[analysisNumber][sensor.number-1].addBin(startTime, stopTime)
		firstDate = addMonth(firstDate)

#------------------------------------------------------------------
					
					#creates a list of start and stop times divided by months
def createDayBins(sensor, analysisNumber):
	firstDate = getFirstDate(sensor)
	today = datetime.datetime.today()

	startHour = datetime.datetime.strptime("00 00", "%H %M").time()
	endHour = datetime.datetime.strptime("23 58 59", "%H %M %S").time()

	for x in range(int((today-firstDate).days)+1):
		startTime = (str(firstDate.year) + '-' + str(firstDate.month) + '-' + str(firstDate.day) + ' ' + str(startHour))
		stopTime = (str(firstDate.year) + '-' + str(firstDate.month) + '-' + str(firstDate.day) + ' ' + str(endHour))
		binArray[analysisNumber][sensor.number-1].addBin(startTime, stopTime)
		firstDate += datetime.timedelta(days=1)
		# print "Start time: " + startTime + " Stop Time: " + stopTime

#------------------------------------------------------------------
					
					#creates a list of start and stop times based on the data of a sensor
def createCustomBins(sensor, analysisNumber):

	firstDate = getFirstDate(sensor)
	today = datetime.datetime.today()
	startHour = int(sensor.customStart)
	endHour = int(sensor.customStop)

	if startHour < 10:
		startHour = '0' + str(startHour)
	if endHour < 10:
		endHour = '0' + str(endHour)

	startHour = datetime.datetime.strptime(str(startHour), "%H").time()
	endHour = datetime.datetime.strptime(str(endHour), "%H").time()

	for x in range(int((today-firstDate).days)):
		startTime = (str(firstDate.year) + '-' + str(firstDate.month) + '-' + str(firstDate.day) + ' ' + str(startHour))
		stopTime = (str(firstDate.year) + '-' + str(firstDate.month) + '-' + str(firstDate.day) + ' ' + str(endHour))
		for day in sensor.weekdays:
			if str(day) == str(firstDate.weekday()):
				binArray[analysisNumber][sensor.number-1].addBin(startTime, stopTime)
		firstDate += datetime.timedelta(days=1)

#------------------------------------------------------------------
					#creates a list of start and stop times based on the data of a sensor

def createSensorBins(sensor, analysisNumber):
	firstYear = int(getFirstYear(sensor))
	today = datetime.datetime.today()
	endYear = int(today.year)

	inRangeBefore = False
	inRangeNow = False
	end = False
	time = ""
	startTime = ""
	endTime = ""
	oldTime = ""
	olderTime = ""

	yearList = []
	for x in range(endYear - firstYear + 1):
		yearList.append(str(firstYear))
		firstYear += 1

	for year in yearList:
		for month in month_list:
			filepath = raw_path + 'Sensor' + str(sensor.number) + '/' + year + '/' + month
			fileList = []
			if os.path.exists(filepath):
				for file in os.listdir(filepath):
					fileList.append(file)
				fileList.sort()
				for file in fileList:
					file = open(filepath + '/' + file)
					for line in file:
						if line[0] != "#":
							row = re.split(',',line)
							time = row[4]
							data = row[5].replace('\n','')

							if sensor.fromSensorMin == "":
								Min = 0
							else:
								Min = sensor.fromSensorMin

							if sensor.fromSensorMax == "":
								Max = 0
							else:
								Max = sensor.fromSensorMax
							if ((float(data) > float(Min)) and (float(data) < float(Max))):
								inRangeNow = True
							else:
								inRangeNow = False
							if ((inRangeNow == True) and (inRangeBefore == False)):
								if str(oldTime) == "":
									binArray[analysisNumber][sensor.number-1].addStartTime(time)
								else:
									binArray[analysisNumber][sensor.number-1].addStartTime(olderTime)
								end = False
							if ((inRangeNow == False) and (inRangeBefore == True)):
								if str(oldTime) == "":
									binArray[analysisNumber][sensor.number-1].addStopTime(time)
								else:
									binArray[analysisNumber][sensor.number-1].addStopTime(oldTime)
								end = True
							inRangeBefore = inRangeNow
							olderTime = oldTime
							oldTime = time

	if end != True:
		if len(binArray[analysisNumber][sensor.number-1].timeArray) != 0:
			binArray[analysisNumber][sensor.number-1].addStopTime(time)

#------------------------------------------------------------------
					#creates a list of start and stop times based on configuration data

def createBins(sensor, analysisNumber):
	if sensor.analysis != "On-Peak Off-Peak %":
		if sensor.binType == "From Sensor":
			createSensorBins(sensor, analysisNumber)
		elif sensor.binType == "Day":
			createDayBins(sensor, analysisNumber)
		elif sensor.binType == "Month":
			createMonthBins(sensor, analysisNumber)
		elif sensor.binType == "Custom Time":
			createCustomBins(sensor, analysisNumber)
		elif sensor.binType == "Year":
			createYearBins(sensor, analysisNumber)

#------------------------------------------------------------------
					#takes the data from "from sensor" or "custom time" and summarizes it by month or year

def aggregateMinMaxData(sensor, analysisNumber):
	filename = (summary_path + 'Pi_' + nameOfPi + '_'+ str(sensor.number) + 'a' + str(analysisNumber + 1) + '.csv')
	summaryfile = open(filename, 'r')
	lastStart = ""
	lastEnd = ""
	minArrayInRange = []
	maxArrayInRange = []
	aveArrayInRange = []
	maximumInRange = 0
	minimumInRange = 0
	averageInRange = 0
	minArrayOutOfRange= []
	maxArrayOutOfRange= []
	aveArrayOutOfRange= []
	maximumOutOfRange= 0
	minimumOutOfRange= 0
	averageOutOfRange= 0
	summarystring = ""
	end = False

	for line in summaryfile:
		if line[0] != '#':
			row = re.split(',',line)
			if row[8].replace('\n','') == "In Range":
				maxArrayInRange.append(float(row[5]))
				minArrayInRange.append(float(row[6]))
				aveArrayInRange.append(float(row[7]))
			else:
				maxArrayOutOfRange.append(float(row[5]))
				minArrayOutOfRange.append(float(row[6]))
				aveArrayOutOfRange.append(float(row[7]))
			startTime = getDateFromDataString(row[3])
			endTime = getDateFromDataString(row[4])
			
			end = False

			if sensor.summaryMethod == "Month":
				if lastStart != "":
					if lastStart.month != startTime.month:
						maximumInRange = max(maxArrayInRange)
						minimumInRange = min(minArrayInRange)
						averageInRange = float(float(sum(aveArrayInRange))/float(len(aveArrayInRange)))
						maximumOutOfRange = max(maxArrayOutOfRange)
						minimumOutOfRange = min(minArrayOutOfRange)
						averageOutOfRange = float(float(sum(aveArrayOutOfRange))/float(len(aveArrayOutOfRange)))
						summarystring += str(PI_NUMBER) + ',' + str(sensor.number) + ',' + str(sensor.name) + ',' + str(lastStart.replace(day=1, hour=0, minute=0, second=0, microsecond=0)) + ',' + str((startTime.replace(day=1, hour=23, minute=59, second=59, microsecond=0)-datetime.timedelta(days = 1))) + ',' + "%.2f" %maximumInRange + ',' + "%.2f" %minimumInRange + ',' + "%.2f" %averageInRange + ",In Range" + '\n'
						summarystring += str(PI_NUMBER) + ',' + str(sensor.number) + ',' + str(sensor.name) + ',' + str(lastStart.replace(day=1, hour=0, minute=0, second=0, microsecond=0)) + ',' + str((startTime.replace(day=1, hour=23, minute=59, second=59, microsecond=0)-datetime.timedelta(days = 1))) + ',' + "%.2f" %maximumOutOfRange + ',' + "%.2f" %minimumOutOfRange + ',' + "%.2f" %averageOutOfRange + ",Out of Range" + '\n'
						maxArrayInRange = []
						minArrayInRange = []
						aveArrayInRange = []
						maxArrayOutOfRange = []
						minArrayOutOfRange = []
						aveArrayOutOfRange = []
						end = True

			if sensor.summaryMethod == "Year":
				if lastStart != "":
					if lastStart.year != startTime.year:
						maximumInRange = max(maxArrayInRange)
						minimumInRange = min(minArrayInRange)
						averageInRange = float(float(sum(aveArrayInRange))/float(len(aveArrayInRange)))
						maximumOutOfRange = max(maxArrayOutOfRange)
						minimumOutOfRange = min(minArrayOutOfRange)
						averageOutOfRange = float(float(sum(aveArrayOutOfRange))/float(len(aveArrayOutOfRange)))
						summarystring += str(PI_NUMBER) + ',' + str(sensor.number) + ',' + str(sensor.name) + ',' + str(datetime.datetime.strptime(str(startTime.year), "%Y")) + ',' + str(datetime.datetime.strptime(str(startTime.year) + " 12 31 23 59 59", "%Y %m %d %H %M %S")) + ',' + "%.2f" %maximumInRange + ',' + "%.2f" %minimumInRange + ',' + "%.2f" %averageInRange + ",In Range" + '\n'
						summarystring += str(PI_NUMBER) + ',' + str(sensor.number) + ',' + str(sensor.name) + ',' + str(datetime.datetime.strptime(str(startTime.year), "%Y")) + ',' + str(datetime.datetime.strptime(str(startTime.year) + " 12 31 23 59 59", "%Y %m %d %H %M %S")) + ',' + "%.2f" %maximumOutOfRange + ',' + "%.2f" %minimumOutOfRange + ',' + "%.2f" %averageOutOfRange + ",Out of Range" + '\n'
						maxArrayInRange = []
						minArrayInRange = []
						aveArrayInRange = []
						maxArrayOutOfRange = []
						minArrayOutOfRange = []
						aveArrayOutOfRange = []
						end = True

			lastStart = startTime
	if not end:
		maximumInRange = max(maxArrayInRange)
		minimumInRange = min(minArrayInRange)
		averageInRange = float(float(sum(aveArrayInRange))/float(len(aveArrayInRange)))
		maximumOutOfRange = max(maxArrayOutOfRange)
		minimumOutOfRange = min(minArrayOutOfRange)
		averageOutOfRange = float(float(sum(aveArrayOutOfRange))/float(len(aveArrayOutOfRange)))
	if sensor.summaryMethod == "Month":
		summarystring += str(PI_NUMBER) + ',' + str(sensor.number) + ',' + str(sensor.name) + ',' + str(lastStart.replace(day=1, hour=0, minute=0, second=0, microsecond=0)) + ',' + str((startTime.replace(day=1, hour=23, minute=59, second=59, microsecond=0)-datetime.timedelta(days = 1))) + ',' + "%.2f" %maximumInRange + ',' + "%.2f" %minimumInRange + ',' + "%.2f" %averageInRange + ",In Range" + '\n'
		summarystring += str(PI_NUMBER) + ',' + str(sensor.number) + ',' + str(sensor.name) + ',' + str(lastStart.replace(day=1, hour=0, minute=0, second=0, microsecond=0)) + ',' + str((startTime.replace(day=1, hour=23, minute=59, second=59, microsecond=0)-datetime.timedelta(days = 1))) + ',' + "%.2f" %maximumOutOfRange + ',' + "%.2f" %minimumOutOfRange + ',' + "%.2f" %averageOutOfRange + ",Out of Range" + '\n'
	if sensor.summaryMethod == "Year":
		summarystring += str(PI_NUMBER) + ',' + str(sensor.number) + ',' + str(sensor.name) + ',' + str(datetime.datetime.strptime(str(startTime.year), "%Y")) + ',' + str(datetime.datetime.strptime(str(startTime.year) + " 12 31 23 59 59", "%Y %m %d %H %M %S")) + ',' + "%.2f" %maximumInRange + ',' + "%.2f" %minimumInRange + ',' + "%.2f" %averageInRange + ",In Range" + '\n'
		summarystring += str(PI_NUMBER) + ',' + str(sensor.number) + ',' + str(sensor.name) + ',' + str(datetime.datetime.strptime(str(startTime.year), "%Y")) + ',' + str(datetime.datetime.strptime(str(startTime.year) + " 12 31 23 59 59", "%Y %m %d %H %M %S")) + ',' + "%.2f" %maximumOutOfRange + ',' + "%.2f" %minimumOutOfRange + ',' + "%.2f" %averageOutOfRange + ",Out of Range" + '\n'
	summaryfile.close()

	initializeSummary(sensor, analysisNumber)
	filename = (summary_path + 'Pi_' + nameOfPi + '_'+ str(sensor.number) + 'a' + str(analysisNumber + 1) + '.csv')
	summaryfile = open(filename, 'a')
	summarystringHeader = "#Pi_Number,Sensor_Number," + str(sensor.name) + ",Start Time,End Time,Max,Min,Ave,In/Out of Range" + '\n'
	summaryfile.write(summarystringHeader)
	summaryfile.write(summarystring)
	summaryfile.close()

#------------------------------------------------------------------
					#takes the data from "from sensor" or "custom time" and seummarizes it by month or year

def aggregateRangeData(sensor, analysisNumber):
	filename = (summary_path + 'Pi_' + nameOfPi + '_'+ str(sensor.number) + 'a' + str(analysisNumber + 1) + '.csv')
	summaryfile = open(filename, 'r')
	lastStart = ""
	lastEnd = ""
	onPercentArrayInRange = []
	onPercentageInRange = 0
	onPercentArrayOutOfRange= []
	onPercentageOutOfRange= 0
	durationInRange = []
	durationOutOfRange = []
	summarystring = ""
	end = False

	for line in summaryfile:
		if line[0] != '#':
			row = re.split(',',line)
			startTime = getDateFromDataString(row[3])
			endTime = getDateFromDataString(row[4])
			timeLapse = endTime - startTime
			if row[6].replace('\n','') == "In Range":
				onPercentArrayInRange.append(float(row[5]))
				durationInRange.append((divmod(timeLapse.days * 86400 + timeLapse.seconds, 60))[0]) # calculates the number of minutes between the two datapoints
			else:
				onPercentArrayOutOfRange.append(float(row[5]))
				durationOutOfRange.append((divmod(timeLapse.days * 86400 + timeLapse.seconds, 60))[0])
			end = False

			if sensor.summaryMethod == "Month":
				if lastStart != "":
					if lastStart.month != startTime.month:
						totalInRange = 0
						totalOutOfRange = 0
						durationInRangeTotal = 0
						durationOutOfRangeTotal = 0
						for x in range(len(durationInRange)):
							totalInRange += durationInRange[x] * onPercentArrayInRange[x]
							durationInRangeTotal += durationInRange[x]
						for x in range(len(durationOutOfRange)):
							totalOutOfRange += durationOutOfRange[x] * onPercentArrayOutOfRange[x]
							durationOutOfRangeTotal += durationOutOfRange[x]
						onPercentageInRange = float(float(totalInRange) / float(durationInRangeTotal))
						onPercentageOutOfRange = float(float(totalOutOfRange) / float(durationOutOfRangeTotal))
						summarystring += str(PI_NUMBER) + ',' + str(sensor.number) + ',' + str(sensor.name) + ',' + str(lastStart.replace(day=1, hour=0, minute=0, second=0, microsecond=0)) + ',' + str((startTime.replace(day=1, hour=23, minute=59, second=59, microsecond=0)-datetime.timedelta(days = 1))) + ',' + "%.2f" %onPercentageInRange + ",In Range" + '\n'
						summarystring += str(PI_NUMBER) + ',' + str(sensor.number) + ',' + str(sensor.name) + ',' + str(lastStart.replace(day=1, hour=0, minute=0, second=0, microsecond=0)) + ',' + str((startTime.replace(day=1, hour=23, minute=59, second=59, microsecond=0)-datetime.timedelta(days = 1))) + ',' + "%.2f" %onPercentageOutOfRange + ",Out of Range" + '\n'
						onPercentArrayInRange = []
						onPercentArrayOutOfRange= []
						durationInRange = []
						durationOutOfRange = []
						end = True

			if sensor.summaryMethod == "Year":
				if lastStart != "":
					if lastStart.year != startTime.year:
						totalInRange = 0
						totalOutOfRange = 0
						durationInRangeTotal = 0
						durationOutOfRangeTotal = 0
						for x in range(len(durationInRange)):
							totalInRange += durationInRange[x] * onPercentArrayInRange[x]
							durationInRangeTotal += durationInRange[x]
						for x in range(len(durationOutOfRange)):
							totalOutOfRange += durationOutOfRange[x] * onPercentArrayOutOfRange[x]
							durationOutOfRangeTotal += durationOutOfRange[x]
						onPercentageInRange = float(float(totalInRange) / float(durationInRangeTotal))
						onPercentageOutOfRange = float(float(totalOutOfRange) / float(durationOutOfRangeTotal))
						summarystring += str(PI_NUMBER) + ',' + str(sensor.number) + ',' + str(sensor.name) + ',' + str(datetime.datetime.strptime(str(startTime.year), "%Y")) + ',' + str(datetime.datetime.strptime(str(startTime.year) + " 12 31 23 59 59", "%Y %m %d %H %M %S")) + ',' + "%.2f" %onPercentageInRange + ",In Range" + '\n'
						summarystring += str(PI_NUMBER) + ',' + str(sensor.number) + ',' + str(sensor.name) + ',' + str(datetime.datetime.strptime(str(startTime.year), "%Y")) + ',' + str(datetime.datetime.strptime(str(startTime.year) + " 12 31 23 59 59", "%Y %m %d %H %M %S")) + ',' + "%.2f" %onPercentageOutOfRange + ",Out of Range" + '\n'
						onPercentArrayInRange = []
						onPercentArrayOutOfRange= []
						durationInRange = []
						durationOutOfRange = []
						end = True

			lastStart = startTime
	if not end:
		totalInRange = 0
		totalOutOfRange = 0
		durationInRangeTotal = 0
		durationOutOfRangeTotal = 0
		for x in range(len(durationInRange)):
			totalInRange += durationInRange[x] * onPercentArrayInRange[x]
			durationInRangeTotal += durationInRange[x]
		for x in range(len(durationOutOfRange)):
			totalOutOfRange += durationOutOfRange[x] * onPercentArrayOutOfRange[x]
			durationOutOfRangeTotal += durationOutOfRange[x]
		onPercentageInRange = float(float(totalInRange) / float(durationInRangeTotal))
		onPercentageOutOfRange = float(float(totalOutOfRange) / float(durationOutOfRangeTotal))
	if sensor.summaryMethod == "Month":
		summarystring += str(PI_NUMBER) + ',' + str(sensor.number) + ',' + str(sensor.name) + ',' + str(lastStart.replace(day=1, hour=0, minute=0, second=0, microsecond=0)) + ',' + str((startTime.replace(day=1, hour=23, minute=59, second=59, microsecond=0)-datetime.timedelta(days = 1))) + ',' + "%.2f" %onPercentageInRange + ",In Range" + '\n'
		summarystring += str(PI_NUMBER) + ',' + str(sensor.number) + ',' + str(sensor.name) + ',' + str(lastStart.replace(day=1, hour=0, minute=0, second=0, microsecond=0)) + ',' + str((startTime.replace(day=1, hour=23, minute=59, second=59, microsecond=0)-datetime.timedelta(days = 1))) + ',' + "%.2f" %onPercentageOutOfRange + ",Out of Range" + '\n'
	if sensor.summaryMethod == "Year":
		summarystring += str(PI_NUMBER) + ',' + str(sensor.number) + ',' + str(sensor.name) + ',' + str(datetime.datetime.strptime(str(startTime.year), "%Y")) + ',' + str(datetime.datetime.strptime(str(startTime.year) + " 12 31 23 59 59", "%Y %m %d %H %M %S")) + ',' + "%.2f" %onPercentageInRange + ",In Range" + '\n'
		summarystring += str(PI_NUMBER) + ',' + str(sensor.number) + ',' + str(sensor.name) + ',' + str(datetime.datetime.strptime(str(startTime.year), "%Y")) + ',' + str(datetime.datetime.strptime(str(startTime.year) + " 12 31 23 59 59", "%Y %m %d %H %M %S")) + ',' + "%.2f" %onPercentageOutOfRange + ",Out of Range" + '\n'
	summaryfile.close()


	initializeSummary(sensor, analysisNumber)
	filename = (summary_path + 'Pi_' + nameOfPi + '_'+ str(sensor.number) + 'a' + str(analysisNumber+1) + '.csv')
	summaryfile = open(filename, 'a')
	summarystringHeader = "#Pi_Number,Sensor_Number," + str(sensor.name) + ",Start Time,End Time,On Percentage,In/Out of Range" + '\n'
	summaryfile.write(summarystringHeader)
	summaryfile.write(summarystring)
	summaryfile.close()
#------------------------------------------------------------------

					# determines if the data was high during set hours, or high during off set hours
def onPeakOffPeakAnalysis(sensor, analysisNumber):
	initializeSummary(sensor, analysisNumber)
	filename = (summary_path + 'Pi_' + nameOfPi + '_'+ str(sensor.number) + 'a' + str(analysisNumber+1) + '.csv')
	summaryfile = open(filename, 'a')
	summaryString = "#Pi_Number,Sensor_Number,Sensor Name,Year,Month,On-Peak %,Off-Peak %" + '\n'
	summaryfile.write(summaryString)

	firstDate = getFirstDate(sensor)
	today = datetime.datetime.today()

	minutesOn_Peak = 0
	minutesOn_OffPeak = 0
	totalMinutes_Peak = 0
	totalMinutes_OffPeak = 0

	startYear = int(firstDate.year)
	startMonth = int(firstDate.month)

	summaryString = ""

	for x in range(monthsDiff(today, firstDate)+1):
		if int(startMonth) < 10:
			startMonth = "0" + str(startMonth)

		filePath = raw_path + 'Sensor' + str(sensor.number) + '/' + str(startYear) + '/' + str(startMonth) + '/'

		if os.path.exists(filePath):
			fileList = []
			for file in os.listdir(filePath):
				fileList.append(file)
			fileList.sort()
			for file in fileList:
				file = open(filePath + file)
				for line in file:
					if line[0] != '#':
						row = re.split(',',line)
						time = row[4]
						data = row[5].replace('\n','')
						time = getDateFromDataString(time)
						if sensor.thresholdMin[analysisNumber] == "":
							Min = 0
						else:
							Min = sensor.thresholdMin[analysisNumber]
						if (time.hour > 11 and time.hour < 17 and time.weekday() < 5):
							totalMinutes_Peak += 1
							if (float(data) > float(Min)):
								minutesOn_Peak += 1
						else:
							totalMinutes_OffPeak += 1
							if (float(data) > float(Min)):
								minutesOn_OffPeak += 1

		onPeakPercentage = float(100 * (float(minutesOn_Peak) / float(totalMinutes_Peak)))
		offPeakPercentage = float(100 * (float(minutesOn_OffPeak) / float(totalMinutes_OffPeak)))
		summaryString = nameOfPi + ',' + str(sensor.number) + ',' + sensor.name + ',' + str(startYear) + ',' + str(startMonth) + ',' + "%.2f" %onPeakPercentage + ',' + "%.2f" %offPeakPercentage + "\n"
		summaryfile.write(summaryString)

		minutesOn_Peak = 0
		minutesOn_OffPeak = 0
		totalMinutes_Peak = 0
		totalMinutes_OffPeak = 0

		startMonth  = int(startMonth) + 1
		if startMonth > 12:
			startMonth = 1
			startYear += 1

#-----------------------------------------------------------------------
							#onPeakOffPeakAnalysis - checks for the on% for the on peak and off peak hours as defined by the electrical grid
def rangeAnalysis(sensor, analysisNumber):
	initializeSummary(sensor, analysisNumber)
	filename = (summary_path + 'Pi_' + nameOfPi + '_'+ str(sensor.number) + 'a' + str(analysisNumber+1) + '.csv')
	summaryfile = open(filename, 'a')
	summaryString = "#Pi_Number,Sensor_Number,Sensor Name,Start Time,End Time,On%,In/Out of Range" + '\n'
	summaryfile.write(summaryString)

	firstDate = getFirstDate(sensor)
	today = datetime.datetime.today()

	minutesOn = 0
	minutesOff = 0
	totalMinutes = 0
	binIndex = 0

	inRangeBefore = False
	inRangeNow = False
	end = False
	firstTimeThrough = True

	startYear = int(firstDate.year)
	startMonth = int(firstDate.month)

	for x in range(monthsDiff(today, firstDate)+1):
		if int(startMonth) < 10:
			startMonth = "0" + str(startMonth)

		filePath = raw_path + 'Sensor' + str(sensor.number) + '/' + str(startYear) + '/' + str(startMonth) + '/'

		if os.path.exists(filePath):
			fileList = []
			for file in os.listdir(filePath):
				fileList.append(file)
			fileList.sort()
			for file in fileList:
				fileDate = getDateFromFile(file)
				file = open(filePath + file)
				for line in file:
					if line[0] != '#':
						row = re.split(',',line)
						time = row[4]
						data = row[5].replace('\n','')
						time = getDateFromDataString(time)
						if firstTimeThrough:
							lastTime = time;
						if ((len(binArray[analysisNumber][sensor.number-1].timeArray)) > 1 and (dateInRange(time, binArray[analysisNumber][sensor.number-1].timeArray[binIndex][0], binArray[analysisNumber][sensor.number-1].timeArray[binIndex][1]))):
							inRangeNow = True
						else:	
							inRangeNow = False
						if sensor.thresholdMin[analysisNumber] == "":
							Min = 0
						else:
							Min = sensor.thresholdMin[analysisNumber]

						if (float(data) > float(Min)):
							minutesOn += 1
							totalMinutes += 1
						else:
							minutesOff += 1
							totalMinutes += 1

						end = False

						if ((inRangeNow == True) and (False == inRangeBefore) and (not firstTimeThrough)):
							percentOn = (float(minutesOn) / float(totalMinutes))*100
							summaryString = str(PI_NUMBER) + ',' + str(sensor.number) + ',' + str(sensor.name) + ',' + str(lastTime) + ',' + str(time) + ',' + "%.2f" %percentOn + ",Not in Range" + '\n'
							if (sensor.binType != "Day" and sensor.binType != "Month"):
								summaryfile.write(summaryString)
								lastTime = time + datetime.timedelta(0,60)
							minutesOn = 0
							minutesOff = 0
							totalMinutes = 0
							if (sensor.binType == "Day" or sensor.binType == "Month"):
								if (float(data) > float(Min)):
									minutesOn += 1
									totalMinutes += 1
								else:
									minutesOff += 1
									totalMinutes += 1
							end = True

						if ((inRangeNow == False) and (True == inRangeBefore)):
							percentOn = (float(minutesOn) / float(totalMinutes))*100
							summaryString = str(PI_NUMBER) + ',' + str(sensor.number) + ',' + str(sensor.name) + ',' + str(lastTime) + ',' + str(time) + ',' + "%.2f" %percentOn + ",In Range" + '\n'
							summaryfile.write(summaryString)
							if binIndex < (len(binArray[sensor.number-1].timeArray)-1):
								binIndex += 1
							minutesOn = 0
							minutesOff = 0
							totalMinutes = 0 
							lastTime = time + datetime.timedelta(0,60)	
							end = True

						inRangeBefore = inRangeNow
						firstTimeThrough = False

		startMonth  = int(startMonth) + 1
		if startMonth > 12:
			startMonth = 1
			startYear += 1

	if not end:
		inRangeString = ""
		if inRangeNow:
			inRangeString = "In Range"
		else:
			inRangeString = "Out of Range"
		percentOn = (float(minutesOn) / float(totalMinutes))*100
		summaryString = str(PI_NUMBER) + ',' + str(sensor.number) + ',' + str(sensor.name) + ',' + str(lastTime) + ',' + str(time) + ',' + "%.2f" %percentOn + ',' + inRangeString + '\n'
		summaryfile.write(summaryString)
	summaryfile.close()

	if (sensor.binType == "Custom Time" and sensor.summaryMethod != "None"):
		aggregateRangeData(sensor)


#------------------------------------------------------------------

						#determines the min and max the user defined in range, and out of range hours
def minMaxAnalysis(sensor, analysisNumber):
	initializeSummary(sensor, analysisNumber)
	filename = (summary_path + 'Pi_' + nameOfPi + '_'+ str(sensor.number) + 'a' + str(analysisNumber+1) + '.csv')
	summaryfile = open(filename, 'a')
	summaryString = "#Pi_Number,Sensor_Number,Sensor Name,Start Time,End Time,Max,Min,Ave,In/Out of Range" + '\n'
	summaryfile.write(summaryString)

	firstDate = getFirstDate(sensor)
	today = datetime.datetime.today()

	maximum = 0.0
	minimum = 100000.0
	average = 0.0
	totalMinutes = 0
	binIndex = 0
	
	inRangeBefore = False
	inRangeNow = False
	end = False
	firstTimeThrough = True
	summaryDataInRange = []
	summaryDataOutOfRange = []

	startYear = int(firstDate.year)
	startMonth = int(firstDate.month)

	for x in range(monthsDiff(today, firstDate)+1):
		if int(startMonth) < 10:
			startMonth = "0" + str(startMonth)

		filePath = raw_path + 'Sensor' + str(sensor.number) + '/' + str(startYear) + '/' + str(startMonth) + '/'

		if os.path.exists(filePath):
			fileList = []
			for file in os.listdir(filePath):
				fileList.append(file)
			fileList.sort()
			for file in fileList:
				fileDate = getDateFromFile(file)
				file = open(filePath + file)
				for line in file:
					if line[0] != '#':
						row = re.split(',',line)
						time = row[4]
						data = row[5].replace('\n','')
						time = getDateFromDataString(time)
						if firstTimeThrough:
							lastTime = time;
						if ((len(binArray[analysisNumber][sensor.number-1].timeArray)) > 1 and dateInRange(time, binArray[analysisNumber][sensor.number-1].timeArray[binIndex][0], binArray[analysisNumber][sensor.number-1].timeArray[binIndex][1])):
							inRangeNow = True
						else:	
							inRangeNow = False
						
						if (float(data) > float(maximum)):
							maximum = float(data)
						if (float(data) < float(minimum)):
							minimum = float(data)

						average += float(data)
						totalMinutes += 1
						end = False

						if ((inRangeNow == True) and (False == inRangeBefore) and (not firstTimeThrough)):
							average = (float(average) / float(totalMinutes))
							summaryString = str(PI_NUMBER) + ',' + str(sensor.number) + ',' + str(sensor.name) + ',' + str(lastTime) + ',' + str(time) + ',' + "%.2f" %maximum + ',' + "%.2f" %minimum + ',' + "%.2f" %average + ",Out of Range" + '\n'
							summaryDataOutOfRange.append([maximum, minimum, average])
							if (sensor.binType != "Day" and sensor.binType != "Month"):
								summaryfile.write(summaryString)
							maximum = 0.0
							minimum = 100000.0
							average = 0.0
							totalMinutes = 0.0
							lastTime = time + datetime.timedelta(0,60)
							end = True
							if (sensor.binType == "Day" or sensor.binType == "Month"):
								average += float(data)
								totalMinutes += 1

						if ((inRangeNow == False) and (True == inRangeBefore)):
							average = float((float(average) / float(totalMinutes)))
							summaryString = str(PI_NUMBER) + ',' + str(sensor.number) + ',' + str(sensor.name) + ',' + str(lastTime) + ',' + str(time) + ',' + "%.2f" %maximum + ',' + "%.2f" %minimum + ',' + "%.2f" %average + ",In Range" + '\n'
							summaryDataInRange.append([maximum, minimum, average])
							summaryfile.write(summaryString)
							if binIndex < (len(binArray[sensor.number-1].timeArray)-1):
								binIndex += 1
							maximum = 0.0
							minimum = 100000.0
							average = 0.0
							totalMinutes = 0.0
							lastTime = time + datetime.timedelta(0,60)
							end = True

						inRangeBefore = inRangeNow
						firstTimeThrough = False

		startMonth  = int(startMonth) + 1
		if startMonth > 12:
			startMonth = 1
			startYear += 1	
	
	if not end:
		inRangeString = ""
		if inRangeNow:
			inRangeString = "In Range"
		else:
			inRangeString = "Out of Range"
		average = float((float(average) / float(totalMinutes)))
		summaryString = str(PI_NUMBER) + ',' + str(sensor.number) + ',' + str(sensor.name) + ',' + str(lastTime) + ',' + str(time) + ',' + "%.2f" %maximum + ',' + "%.2f" %minimum + ',' + "%.2f" %average + ',' + inRangeString + '\n'
		summaryfile.write(summaryString)
	summaryfile.close()

	if sensor.binType == "Custom" or sensor.binType == "From Sensor":
		aggregateMinMaxData(sensor)

#------------------------------------------------------------------

					#analyzeData() calls the functions to output for each of the sensors
def analyzeData():
	for c in range(3):
		for i in range(NUM_SENSORS):
			if SENSOR_INFO[i].numberOfAnalysis >= c:
				createBins(SENSOR_INFO[i], c)
				if SENSOR_INFO[i].analysis[c] == "On-Peak Off-Peak %":
					onPeakOffPeakAnalysis(SENSOR_INFO[i], c)
					print 'Performing Peak Percent Analysis: ' + 'Sensor Number: ' + str(SENSOR_INFO[i].number) + ' Analysis Number: ' + str(c+1)
				elif SENSOR_INFO[i].analysis[c] == "Range Analysis":
					rangeAnalysis(SENSOR_INFO[i], c)
					print 'Performing Range Analysis: ' + 'Sensor Number: ' + str(SENSOR_INFO[i].number) + ' Analysis Number: ' + str(c+1)
				elif SENSOR_INFO[i].analysis[c] == "Min-Max":
					minMaxAnalysis(SENSOR_INFO[i], c)
					print 'Perfromings Min-Max Anlysis: ' + 'Sensor Number: ' + str(SENSOR_INFO[i].number) + ' Analysis Number: ' + str(c+1)


#==================================================================
#-------------------------MAIN APPLICATION-------------------------
#==================================================================

binArray = [[],[],[]]

for c in range(3):
	for i in range(NUM_SENSORS):
		binArray[c].append(Bins(i))

analyzeData()

# for x in range(len(binArray[2].timeArray)):
# 	print "Start: " + str(binArray[2].timeArray[x][0]) + " Stop: " + str(binArray[2].timeArray[x][1])

#==================================================================
#-----------------Tell the website the pi is not busy--------------
#==================================================================

file = open('/home/cjk36/Desktop/CERF-DAQ/WebPage/pages/analysisStatus.txt', "w")
file.write("0")
file.close()




