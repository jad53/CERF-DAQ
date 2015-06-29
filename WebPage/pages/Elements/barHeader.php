<div class="row">
<div class="col-lg-4 center-block">
	<a href="sensor<?php echo $sensor_number ?>.php" style="margin: 0 auto;"><i class="fa fa-bar-chart-o fa-fw"></i> <?php echo $pageSensor ?> : <?php echo $year_sum ?></a>
</div>
<div class="col-lg-4 pull-right">
	<div class="input-group">
		<span class="input-group-btn">		
			<button class="btn btn-default" type="submit" form="submit" >Submit</button>
		</span>
		<form action="<?php echo $pageLink?>" method="get" id="submit">
			<input type="text" class="form-control" name="Year" placeholder="Enter Year" maxlength= 4>
		</form>
	</div> <!-- input-group -->
</div>
<div class="col-lg-4">
	<select style="width:75%;" class="form-control"> 
		<option>On/Off Peak Analysis</option>
		<option>Min/Max/Average Analysis</option>
		<option>Bin Analysis</option>
	</select>
</div>
</div>