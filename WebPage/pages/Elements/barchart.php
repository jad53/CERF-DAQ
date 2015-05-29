<div class="panel panel-default">
                        <div class="panel-heading">
                            <i class="fa fa-bar-chart-o fa-fw"></i> <?php echo $pageSensor ?> : <?php echo $year_sum ?>
							<div class="pull-right">
							<form action="<?php echo $pageLink?>" method="get">
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
						$lines = file($Summary_Base . $year_file);
						$table = '<table class="table table-bordered table-hover table-striped"><thead><tr><th>Month</th><th>On Peak %</th><th>Off Peak %</th></tr></thead><tbody>';
						$count1 = 0;
						$IndexToMonth = array("01" => "Jan", "02" => "Feb", "03" => "Mar", "04" => "Apr", "05" => "May", "06" => "Jun", "07" => "Jul", "08" => "Aug", "09" => "Sep", "10" => "Oct", "11" => "Nov", "12" => "Dec");
						foreach($lines as $line){
							if(substr($line, 0, 1) == "#"){
							}else{
								list($pi_id, $sensor_id, $sensor_name, $summary_year, $month, $on, $off) = explode(',', $line);
								$month = $IndexToMonth[$month];
								if($on == "0.00"){$on = "-";}
								if($off == "0.00\n"){$off = "-";}
								$table .= "<tr><td>$month</td><td>$on</td><td>$off</td></tr>";
							}
						}
						$table .= '</tbody></table>';
						echo $table;
					?>
                                    </div>
                                    <!-- /.table-responsive -->
                                </div>
                                <!-- /.col-lg-4 (nested) -->
                                <div class="col-lg-8">
                                    <div id="summary-bar-chart" style="height: 100%;"></div>
                                </div>
                                <!-- /.col-lg-8 (nested) -->
                            </div>
                            <!-- /.row -->
                        </div>
                        <!-- /.panel-body -->
                    </div>