<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>CERF Pi 1</title>

    <!-- Bootstrap Core CSS -->
    <link href="../bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="../bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet">

    <!-- Timeline CSS -->
    <link href="../dist/css/timeline.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="../dist/css/sb-admin-2.css" rel="stylesheet">

    <!-- Morris Charts CSS -->
    <link href="../bower_components/morrisjs/morris.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="../bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">


</head>

<body>
<?php
	$year = date("Y");
	$day = date("Y-m-d");
	if(isset($_GET['Year'])){
		$year = $_GET['Year'];
	}
	if(isset($_GET['Day'])){
		$day = $_GET['Day'];
	}
	include 'global_vars.php' ;
	
	$day_file1 = "Sensor1/Pi_" . $Pi_Number . "_1_" . $day . ".txt";
	$day_file2 = "Sensor2/Pi_" . $Pi_Number . "_2_" . $day . ".txt";
	$day_file3 = "Sensor3/Pi_" . $Pi_Number . "_3_" . $day . ".txt";
	$year_file1 = "Pi_" . $Pi_Number . "_1_" . $year . ".txt";
	$year_file2 = "Pi_" . $Pi_Number . "_2_" . $year . ".txt";
	$year_file3 = "Pi_" . $Pi_Number . "_3_" . $year . ".txt";

	$size = 0;
	foreach(new RecursiveIteratorIterator(new RecursiveDirectoryIterator($Raw_Base)) as $file){
		$size+=$file->getSize();
	}
	$size /= 1000000;
	$size = number_format($size, 1, '.', ',');
	$free_space = disk_free_space ('/')/1000000000;
	$free_space = number_format($free_space, 1, '.', ',');
?>
    <div id="wrapper">

        <!-- Navigation -->
        <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.html">CERF Pi <?php echo $Pi_Number ?></a>
            </div>
            <!-- /.navbar-header -->

            <div class="navbar-default sidebar" role="navigation">
                <div class="sidebar-nav navbar-collapse">
                    <ul class="nav" id="side-menu">
						<li>
                            <a href="index.php"><i class="fa fa-dashboard fa-fw"></i> Dashboard</a>
                        </li>
                        <li>
                            <a href="sensor1.php"><i class="fa fa-dashboard fa-fw"></i> <?php echo $SENSOR1 ?></a>
                        </li>
                        <li>
                            <a href="sensor2.php"><i class="fa fa-bar-chart-o fa-fw"></i> <?php echo $SENSOR2 ?></a>
                        </li>
                        <li>
                            <a href="sensor3.php"><i class="fa fa-table fa-fw"></i> <?php echo $SENSOR3 ?></a>
                        </li>
                    </ul>
                </div>
                <!-- /.sidebar-collapse -->
            </div>
            <!-- /.navbar-static-side -->
        </nav>

        <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Dashboard</h1>
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-3">
                                    <i class="fa fa-database fa-5x"></i>
                                </div>
                                <div class="col-xs-9 text-right">
                                    <div class="hugeTitle">Raw Data</div>
                                    <div><?php echo $size ?>mb uncompressed</div>
                                </div>
                            </div>
                        </div>
                        <a href="/data/summary_data/yearly.rtf" download="pi_test_yearly.txt">
                            <div class="panel-footer">
                                <span class="pull-left">Download</span>
                                <span class="pull-right"><i class="fa fa-arrow-circle-down"></i></span>
                                <div class="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="panel panel-green">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-3">
                                    <i class="fa fa-file-text fa-5x"></i>
                                </div>
                                <div class="col-xs-9 text-right">
                                    <div class="hugeTitle">Summary Data</div>
									<div><?php echo $free_space ?>gb Free Disk Space</div>
                                </div>
                            </div>
                        </div>
                        <a href=""/data/summary_data/yearly.rtf" download="pi_test_yearly.txt"">
                            <div class="panel-footer">
                                <span class="pull-left">Download</span>
                                <span class="pull-right"><i class="fa fa-arrow-circle-down"></i></span>
                                <div class="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <!-- /.row -->
            <div class="row">
                <div class="col-lg-12">
                    <!-- /.YEAR SENSOR 1 panel -->
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <i class="fa fa-bar-chart-o fa-fw"></i> <?php echo $SENSOR1 ?> : <?php echo $year ?>
							<div class="pull-right">
							<form action="index.php" method="get">
							<input type="text" name="Year" placeholder="Enter Year" maxlength= 4>
							<input type="submit">
							</form>
							</div>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="table-responsive">
                                        <?php
											$lines = file($Summary_Base . $year_file1);
											$table = '<table class="table table-bordered table-hover table-striped"><thead><tr><th>Month</th><th>On Peak %</th><th>Off Peak %</th></tr></thead><tbody>';
											foreach($lines as $line){
												list($month, $on_peak, $off_peak) = explode(',', $line);
												$table .= "<tr><td>$month</td><td>$on_peak</td><td>$off_peak</td></tr>";
											}
											$table .= '</tbody></table>';
											echo $table;
										?>
                                    </div>
                                    <!-- /.table-responsive -->
                                </div>
                                <!-- /.col-lg-4 (nested) -->
                                <div class="col-lg-8">
                                    <div id="summary-bar-chart 1" style="height: 100%;"></div>
                                </div>
                                <!-- /.col-lg-8 (nested) -->
                            </div>
                            <!-- /.row -->
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
					<!-- /.YEAR SENSOR 2 panel -->
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <i class="fa fa-bar-chart-o fa-fw"></i> <?php echo $SENSOR2 ?> : <?php echo $year ?>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="table-responsive">
                                        <?php
											$lines = file($Summary_Base . $year_file2);
											$table = '<table class="table table-bordered table-hover table-striped"><thead><tr><th>Month</th><th>On Peak %</th><th>Off Peak %</th></tr></thead><tbody>';
											foreach($lines as $line){
												list($month, $on_peak, $off_peak) = explode(',', $line);
												$table .= "<tr><td>$month</td><td>$on_peak</td><td>$off_peak</td></tr>";
											}
											$table .= '</tbody></table>';
											echo $table;
										?>
                                    </div>
                                    <!-- /.table-responsive -->
                                </div>
                                <!-- /.col-lg-4 (nested) -->
                                <div class="col-lg-8">
                                    <div id="summary-bar-chart 2" style="height: 100%;"></div>
                                </div>
                                <!-- /.col-lg-8 (nested) -->
                            </div>
                            <!-- /.row -->
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                    <!-- /.YEAR SENSOR 2 panel -->
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <i class="fa fa-bar-chart-o fa-fw"></i> <?php echo $SENSOR3 ?> : <?php echo $year ?>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="table-responsive">
                                        <?php
											$lines = file($Summary_Base . $year_file3);
											$table = '<table class="table table-bordered table-hover table-striped"><thead><tr><th>Month</th><th>On Peak %</th><th>Off Peak %</th></tr></thead><tbody>';
											foreach($lines as $line){
												list($month, $on_peak, $off_peak) = explode(',', $line);
												$table .= "<tr><td>$month</td><td>$on_peak</td><td>$off_peak</td></tr>";
											}
											$table .= '</tbody></table>';
											echo $table;
										?>
                                    </div>
                                    <!-- /.table-responsive -->
                                </div>
                                <!-- /.col-lg-4 (nested) -->
                                <div class="col-lg-8">
                                    <div id="summary-bar-chart 3" style="height: 100%;"></div>
                                </div>
                                <!-- /.col-lg-8 (nested) -->
                            </div>
                            <!-- /.row -->
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->

    <!-- jQuery -->
    <script src="../bower_components/jquery/dist/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="../bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="../bower_components/metisMenu/dist/metisMenu.min.js"></script>

    <!-- Morris Charts JavaScript -->
    <script src="../bower_components/raphael/raphael-min.js"></script>
    <script src="../bower_components/morrisjs/morris.min.js"></script>
    <script src="../js/morris-data.js"></script>
	<script>
		new Morris.Bar({
        	element: 'summary-bar-chart 1',
        	data: <?php
					$filename = $Summary_Base . $year_file1;
					$lines = file($filename);
					$data = '[';
					foreach($lines as $line){
						list($month, $on_peak, $off_peak) = explode(',', $line);
						$data .= "{y:'$month', a: $on_peak, b: $off_peak},";
					}
					$data = rtrim($data, ',');
					$data .= '],';
					echo $data;
				?> 
        	xkey: 'y',
        	ykeys: ['a', 'b'],
        	labels: ['On Peak %', 'Off Peak %'],
        	hideHover: 'auto',
        	resize: true
    	});
        new Morris.Bar({
        	element: 'summary-bar-chart 2',
        	data: <?php
					$filename = $Summary_Base . $year_file1;
					$lines = file($filename);
					$data = '[';
					foreach($lines as $line){
						list($month, $on_peak, $off_peak) = explode(',', $line);
						$data .= "{y:'$month', a: $on_peak, b: $off_peak},";
					}
					$data = rtrim($data, ',');
					$data .= '],';
					echo $data;
				?> 
        	xkey: 'y',
        	ykeys: ['a', 'b'],
        	labels: ['On Peak %', 'Off Peak %'],
        	hideHover: 'auto',
        	resize: true
    	});
        new Morris.Bar({
        	element: 'summary-bar-chart 3',
        	data: <?php
					$filename = $Summary_Base . $year_file1;
					$lines = file($filename);
					$data = '[';
					foreach($lines as $line){
						list($month, $on_peak, $off_peak) = explode(',', $line);
						$data .= "{y:'$month', a: $on_peak, b: $off_peak},";
					}
					$data = rtrim($data, ',');
					$data .= '],';
					echo $data;
				?> 
        	xkey: 'y',
        	ykeys: ['a', 'b'],
        	labels: ['On Peak %', 'Off Peak %'],
        	hideHover: 'auto',
        	resize: true
    	});
		
	</script>

    <!-- Custom Theme JavaScript -->
    <script src="../dist/js/sb-admin-2.js"></script>

</body>

</html>