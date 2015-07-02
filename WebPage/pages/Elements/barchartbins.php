<div class="panel panel-default">
                       <div class="panel-heading">
				<?php include 'Elements/barHeader.php' ?>
                        </div>

                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="table-responsive">
                                        <?php
						$lines = file($Summary_Base . $SENSOR_INFO[$sensor_number-1]->analysis . '/' . $year_file);
						$table = '<table class="table table-bordered table-hover table-striped"><thead><tr><th>Start Time</th><th>End Time</th></tr></thead><tbody>';
						$IndexToMonth = array("01" => "Jan", "02" => "Feb", "03" => "Mar", "04" => "Apr", "05" => "May", "06" => "Jun", "07" => "Jul", "08" => "Aug", "09" => "Sep", "10" => "Oct", "11" => "Nov", "12" => "Dec");
						foreach($lines as $line){
							if(substr($line, 0, 1) == "#"){
							}else{
								list($pi_id, $sensor_id, $sensor_name, $summary_year, $month, $start_time, $end_time) = explode(',', $line);
								$table .= "<tr><td>$start_time</td><td>$end_time</td></tr>";
							}
						}
						$table .= '</tbody></table>';
						echo $table;
					?>
                                    </div>
                                    <!-- /.table-responsive -->
                                </div>
                                <!-- /.col-lg-12 (nested) -->
                            </div>
                        </div>
                        <!-- /.panel-body -->
			<div class="panel-heading">
				<?php include 'Elements/barFooter.php' ?>
			</div>
                    </div>
