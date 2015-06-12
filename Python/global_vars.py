from user_input import* # import the user input for sensor-data

#==================================================================
#----------------------INITIALIZE VARIABLES------------------------
#==================================================================

sensorTypeTempAndLight = [Sensor_1_Type, Sensor_2_Type, Sensor_3_Type, Sensor_4_Type, Sensor_5_Type, Sensor_6_Type, Sensor_7_Type, Sensor_8_Type, Sensor_9_Type, Sensor_10_Type, Sensor_11_Type, Sensor_12_Type, Sensor_13_Type, Sensor_14_Type, Sensor_15_Type, Sensor_16_Type]
temperatureAndLightNames = [Sensor_1, Sensor_2, Sensor_3, Sensor_4, Sensor_5, Sensor_6, Sensor_7, Sensor_8, Sensor_9, Sensor_10, Sensor_11, Sensor_12, Sensor_13, Sensor_14, Sensor_15, Sensor_16]
occupancyNames = [Occupancy_1, Occupancy_2, Occupancy_3, Occupancy_4, Occupancy_5, Occupancy_6, Occupancy_7, Occupancy_8, Occupancy_9, Occupancy_10, Occupancy_11, Occupancy_12, Occupancy_13, Occupancy_14, Occupancy_15, Occupancy_16]
numberOfSensors = Number_of_Temperature_and_Light_Sensors + Number_of_Occupancy_Sensors


#==================================================================
#------------------------GLOBAL VARIABLES--------------------------
#==================================================================

##### Variables meant to be used outside of the scope of this file are defined in ALL CAPS

PI_NUMBER = Pi_Number
TOTAL_SENSORS = Number_of_Temperature_and_Light_Sensors + Number_of_Occupancy_Sensors
SENSOR_TOL = Sensor_tol
PeakTime1 = 11
PeakTime2 = 19


SENSOR_NAMES = [""] * TOTAL_SENSORS
SENSOR_TYPES = [""] * TOTAL_SENSORS

##### Populate sensor data
for i in range(Number_of_Temperature_and_Light_Sensors):
	SENSOR_NAMES[i] = temperatureAndLightNames[i]
for i in range(Number_of_Occupancy_Sensors):
	SENSOR_NAMES[i + Number_of_Temperature_and_Light_Sensors] = occupancyNames[i]

for i in range(Number_of_Temperature_and_Light_Sensors):
	SENSOR_TYPES[i] = sensorTypeTempAndLight[i]
for i in range(Number_of_Occupancy_Sensors):
	SENSOR_TYPES[i+Number_of_Temperature_and_Light_Sensors] = "Occupancy"

