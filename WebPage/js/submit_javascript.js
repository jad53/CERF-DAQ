function toggleDisplay1() {
if (document.getElementById("panelBody1").style.display == "none") {
document.getElementById("panelBody1").style.display = "block";
document.getElementById("submit1").style.display = "block";
} else {
document.getElementById("panelBody1").style.display = "none";
document.getElementById("submit1").style.display = "none";
}
}

function toggleDisplay2() {
if (document.getElementById("panelBody2").style.display == "none") {
document.getElementById("panelBody2").style.display = "block";
document.getElementById("submit2").style.display = "block";
} else {
document.getElementById("panelBody2").style.display = "none";
document.getElementById("submit2").style.display = "none";
}
}

function toggleDisplay3() {
if (document.getElementById("panelBody3").style.display == "none") {
document.getElementById("panelBody3").style.display = "block";
document.getElementById("submit3").style.display = "block";
} else {
document.getElementById("panelBody3").style.display = "none";
document.getElementById("submit3").style.display = "none";
}
}

function toggleDisplay4() {
if (document.getElementById("panelBody4").style.display == "none") {
document.getElementById("panelBody4").style.display = "block";
document.getElementById("submit4").style.display = "block";
} else {
document.getElementById("panelBody4").style.display = "none";
document.getElementById("submit4").style.display = "none";
}
}

function toggleDisplay5() {
if (document.getElementById("panelBody5").style.display == "none") {
document.getElementById("panelBody5").style.display = "block";
document.getElementById("submit5").style.display = "block";
} else {
document.getElementById("panelBody5").style.display = "none";
document.getElementById("submit5").style.display = "none";
}
}

function toggleDisplay6() {
if (document.getElementById("panelBody6").style.display == "none") {
document.getElementById("panelBody6").style.display = "block";
document.getElementById("submit6").style.display = "block";
} else {
document.getElementById("panelBody6").style.display = "none";
document.getElementById("submit6").style.display = "none";
}
}

function toggleDisplay7() {
if (document.getElementById("panelBody7").style.display == "none") {
document.getElementById("panelBody7").style.display = "block";
document.getElementById("submit7").style.display = "block";
} else {
document.getElementById("panelBody7").style.display = "none";
document.getElementById("submit7").style.display = "none";
}
}

function toggleDisplay8() {
if (document.getElementById("panelBody8").style.display == "none") {
document.getElementById("panelBody8").style.display = "block";
document.getElementById("submit8").style.display = "block";
} else {
document.getElementById("panelBody8").style.display = "none";
document.getElementById("submit8").style.display = "none";
}
}

function toggleDisplay9() {
if (document.getElementById("panelBody9").style.display == "none") {
document.getElementById("panelBody9").style.display = "block";
document.getElementById("submit9").style.display = "block";
} else {
document.getElementById("panelBody9").style.display = "none";
document.getElementById("submit9").style.display = "none";
}
}

function toggleDisplay10() {
if (document.getElementById("panelBody10").style.display == "none") {
document.getElementById("panelBody10").style.display = "block";
document.getElementById("submit10").style.display = "block";
} else {
document.getElementById("panelBody10").style.display = "none";
document.getElementById("submit10").style.display = "none";
}
}

function toggleDisplay11() {
if (document.getElementById("panelBody11").style.display == "none") {
document.getElementById("panelBody11").style.display = "block";
document.getElementById("submit11").style.display = "block";
} else {
document.getElementById("panelBody11").style.display = "none";
document.getElementById("submit11").style.display = "none";
}
}

function toggleDisplay12() {
if (document.getElementById("panelBody12").style.display == "none") {
document.getElementById("panelBody12").style.display = "block";
document.getElementById("submit12").style.display = "block";
} else {
document.getElementById("panelBody12").style.display = "none";
document.getElementById("submit12").style.display = "none";
}
}

$("#sensorType1").change(function() {
var sensorType = $("#sensorType1").val();
console.log(sensorType);
console.log("sensor type");
if (sensorType == 'Occupancy'){
document.getElementById("i2cAddress1").style.display = "none";
document.getElementById("wattage1").style.display = "none";
} else if (sensorType == 'Current'){
document.getElementById("wattage1").style.display = "block";
document.getElementById("i2cAddress1").style.display = "none";
} else {
document.getElementById("i2cAddress1").style.display = "block";
document.getElementById("wattage1").style.display = "none";
}
} );

$("#sensorType2").change(function() {
var sensorType = $("#sensorType2").val();
console.log(sensorType);
console.log("sensor type");
if (sensorType == 'Occupancy'){
document.getElementById("i2cAddress2").style.display = "none";
document.getElementById("wattage2").style.display = "none";
} else if (sensorType == 'Current'){
document.getElementById("wattage2").style.display = "block";
document.getElementById("i2cAddress2").style.display = "none";
} else {
document.getElementById("i2cAddress2").style.display = "block";
document.getElementById("wattage2").style.display = "none";
}
} );

$("#sensorType3").change(function() {
var sensorType = $("#sensorType3").val();
console.log(sensorType);
console.log("sensor type");
if (sensorType == 'Occupancy'){
document.getElementById("i2cAddress3").style.display = "none";
document.getElementById("wattage3").style.display = "none";
} else if (sensorType == 'Current'){
document.getElementById("wattage3").style.display = "block";
document.getElementById("i2cAddress3").style.display = "none";
} else {
document.getElementById("i2cAddress3").style.display = "block";
document.getElementById("wattage3").style.display = "none";
}
} );

$("#sensorType4").change(function() {
var sensorType = $("#sensorType4").val();
console.log(sensorType);
console.log("sensor type");
if (sensorType == 'Occupancy'){
document.getElementById("i2cAddress4").style.display = "none";
document.getElementById("wattage4").style.display = "none";
} else if (sensorType == 'Current'){
document.getElementById("wattage4").style.display = "block";
document.getElementById("i2cAddress4").style.display = "none";
} else {
document.getElementById("i2cAddress4").style.display = "block";
document.getElementById("wattage4").style.display = "none";
}
} );

$("#sensorType5").change(function() {
var sensorType = $("#sensorType5").val();
console.log(sensorType);
console.log("sensor type");
if (sensorType == 'Occupancy'){
document.getElementById("i2cAddress5").style.display = "none";
document.getElementById("wattage5").style.display = "none";
} else if (sensorType == 'Current'){
document.getElementById("wattage5").style.display = "block";
document.getElementById("i2cAddress5").style.display = "none";
} else {
document.getElementById("i2cAddress5").style.display = "block";
document.getElementById("wattage5").style.display = "none";
}
} );

$("#sensorType6").change(function() {
var sensorType = $("#sensorType6").val();
console.log(sensorType);
console.log("sensor type");
if (sensorType == 'Occupancy'){
document.getElementById("i2cAddress6").style.display = "none";
document.getElementById("wattage6").style.display = "none";
} else if (sensorType == 'Current'){
document.getElementById("wattage6").style.display = "block";
document.getElementById("i2cAddress6").style.display = "none";
} else {
document.getElementById("i2cAddress6").style.display = "block";
document.getElementById("wattage6").style.display = "none";
}
} );

$("#sensorType7").change(function() {
var sensorType = $("#sensorType7").val();
console.log(sensorType);
console.log("sensor type");
if (sensorType == 'Occupancy'){
document.getElementById("i2cAddress7").style.display = "none";
document.getElementById("wattage7").style.display = "none";
} else if (sensorType == 'Current'){
document.getElementById("wattage7").style.display = "block";
document.getElementById("i2cAddress7").style.display = "none";
} else {
document.getElementById("i2cAddress7").style.display = "block";
document.getElementById("wattage7").style.display = "none";
}
} );

$("#sensorType8").change(function() {
var sensorType = $("#sensorType8").val();
console.log(sensorType);
console.log("sensor type");
if (sensorType == 'Occupancy'){
document.getElementById("i2cAddress8").style.display = "none";
document.getElementById("wattage8").style.display = "none";
} else if (sensorType == 'Current'){
document.getElementById("wattage8").style.display = "block";
document.getElementById("i2cAddress8").style.display = "none";
} else {
document.getElementById("i2cAddress8").style.display = "block";
document.getElementById("wattage8").style.display = "none";
}
} );

$("#sensorType9").change(function() {
var sensorType = $("#sensorType9").val();
console.log(sensorType);
console.log("sensor type");
if (sensorType == 'Occupancy'){
document.getElementById("i2cAddress9").style.display = "none";
document.getElementById("wattage9").style.display = "none";
} else if (sensorType == 'Current'){
document.getElementById("wattage9").style.display = "block";
document.getElementById("i2cAddress9").style.display = "none";
} else {
document.getElementById("i2cAddress9").style.display = "block";
document.getElementById("wattage9").style.display = "none";
}
} );

$("#sensorType10").change(function() {
var sensorType = $("#sensorType10").val();
console.log(sensorType);
console.log("sensor type");
if (sensorType == 'Occupancy'){
document.getElementById("i2cAddress10").style.display = "none";
document.getElementById("wattage10").style.display = "none";
} else if (sensorType == 'Current'){
document.getElementById("wattage10").style.display = "block";
document.getElementById("i2cAddress10").style.display = "none";
} else {
document.getElementById("i2cAddress10").style.display = "block";
document.getElementById("wattage10").style.display = "none";
}
} );

$("#sensorType11").change(function() {
var sensorType = $("#sensorType11").val();
console.log(sensorType);
console.log("sensor type");
if (sensorType == 'Occupancy'){
document.getElementById("i2cAddress11").style.display = "none";
document.getElementById("wattage11").style.display = "none";
} else if (sensorType == 'Current'){
document.getElementById("wattage11").style.display = "block";
document.getElementById("i2cAddress11").style.display = "none";
} else {
document.getElementById("i2cAddress11").style.display = "block";
document.getElementById("wattage11").style.display = "none";
}
} );

$("#sensorType12").change(function() {
var sensorType = $("#sensorType12").val();
console.log(sensorType);
console.log("sensor type");
if (sensorType == 'Occupancy'){
document.getElementById("i2cAddress12").style.display = "none";
document.getElementById("wattage12").style.display = "none";
} else if (sensorType == 'Current'){
document.getElementById("wattage12").style.display = "block";
document.getElementById("i2cAddress12").style.display = "none";
} else {
document.getElementById("i2cAddress12").style.display = "block";
document.getElementById("wattage12").style.display = "none";
}
} );

$("#numAnalysis1").change(function() {
var numberOfAnalysis = $("#numAnalysis1").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 0){
document.getElementById("analysisInformation11").style.display = "block";
} else {
document.getElementById("analysisInformation11").style.display = "none";
}
} );

$("#numAnalysis1").change(function() {
var numberOfAnalysis = $("#numAnalysis1").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 1){
document.getElementById("analysisInformation21").style.display = "block";
} else {
document.getElementById("analysisInformation21").style.display = "none";
}
} );

$("#numAnalysis1").change(function() {
var numberOfAnalysis = $("#numAnalysis1").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 2){
document.getElementById("analysisInformation31").style.display = "block";
} else {
document.getElementById("analysisInformation31").style.display = "none";
}
} );

$("#numAnalysis2").change(function() {
var numberOfAnalysis = $("#numAnalysis2").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 0){
document.getElementById("analysisInformation12").style.display = "block";
} else {
document.getElementById("analysisInformation12").style.display = "none";
}
} );

$("#numAnalysis2").change(function() {
var numberOfAnalysis = $("#numAnalysis2").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 1){
document.getElementById("analysisInformation22").style.display = "block";
} else {
document.getElementById("analysisInformation22").style.display = "none";
}
} );

$("#numAnalysis2").change(function() {
var numberOfAnalysis = $("#numAnalysis2").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 2){
document.getElementById("analysisInformation32").style.display = "block";
} else {
document.getElementById("analysisInformation32").style.display = "none";
}
} );

$("#numAnalysis3").change(function() {
var numberOfAnalysis = $("#numAnalysis3").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 0){
document.getElementById("analysisInformation13").style.display = "block";
} else {
document.getElementById("analysisInformation13").style.display = "none";
}
} );

$("#numAnalysis3").change(function() {
var numberOfAnalysis = $("#numAnalysis3").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 1){
document.getElementById("analysisInformation23").style.display = "block";
} else {
document.getElementById("analysisInformation23").style.display = "none";
}
} );

$("#numAnalysis3").change(function() {
var numberOfAnalysis = $("#numAnalysis3").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 2){
document.getElementById("analysisInformation33").style.display = "block";
} else {
document.getElementById("analysisInformation33").style.display = "none";
}
} );

$("#numAnalysis4").change(function() {
var numberOfAnalysis = $("#numAnalysis4").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 0){
document.getElementById("analysisInformation14").style.display = "block";
} else {
document.getElementById("analysisInformation14").style.display = "none";
}
} );

$("#numAnalysis4").change(function() {
var numberOfAnalysis = $("#numAnalysis4").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 1){
document.getElementById("analysisInformation24").style.display = "block";
} else {
document.getElementById("analysisInformation24").style.display = "none";
}
} );

$("#numAnalysis4").change(function() {
var numberOfAnalysis = $("#numAnalysis4").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 2){
document.getElementById("analysisInformation34").style.display = "block";
} else {
document.getElementById("analysisInformation34").style.display = "none";
}
} );

$("#numAnalysis5").change(function() {
var numberOfAnalysis = $("#numAnalysis5").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 0){
document.getElementById("analysisInformation15").style.display = "block";
} else {
document.getElementById("analysisInformation15").style.display = "none";
}
} );

$("#numAnalysis5").change(function() {
var numberOfAnalysis = $("#numAnalysis5").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 1){
document.getElementById("analysisInformation25").style.display = "block";
} else {
document.getElementById("analysisInformation25").style.display = "none";
}
} );

$("#numAnalysis5").change(function() {
var numberOfAnalysis = $("#numAnalysis5").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 2){
document.getElementById("analysisInformation35").style.display = "block";
} else {
document.getElementById("analysisInformation35").style.display = "none";
}
} );

$("#numAnalysis6").change(function() {
var numberOfAnalysis = $("#numAnalysis6").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 0){
document.getElementById("analysisInformation16").style.display = "block";
} else {
document.getElementById("analysisInformation16").style.display = "none";
}
} );

$("#numAnalysis6").change(function() {
var numberOfAnalysis = $("#numAnalysis6").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 1){
document.getElementById("analysisInformation26").style.display = "block";
} else {
document.getElementById("analysisInformation26").style.display = "none";
}
} );

$("#numAnalysis6").change(function() {
var numberOfAnalysis = $("#numAnalysis6").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 2){
document.getElementById("analysisInformation36").style.display = "block";
} else {
document.getElementById("analysisInformation36").style.display = "none";
}
} );

$("#numAnalysis7").change(function() {
var numberOfAnalysis = $("#numAnalysis7").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 0){
document.getElementById("analysisInformation17").style.display = "block";
} else {
document.getElementById("analysisInformation17").style.display = "none";
}
} );

$("#numAnalysis7").change(function() {
var numberOfAnalysis = $("#numAnalysis7").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 1){
document.getElementById("analysisInformation27").style.display = "block";
} else {
document.getElementById("analysisInformation27").style.display = "none";
}
} );

$("#numAnalysis7").change(function() {
var numberOfAnalysis = $("#numAnalysis7").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 2){
document.getElementById("analysisInformation37").style.display = "block";
} else {
document.getElementById("analysisInformation37").style.display = "none";
}
} );

$("#numAnalysis8").change(function() {
var numberOfAnalysis = $("#numAnalysis8").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 0){
document.getElementById("analysisInformation18").style.display = "block";
} else {
document.getElementById("analysisInformation18").style.display = "none";
}
} );

$("#numAnalysis8").change(function() {
var numberOfAnalysis = $("#numAnalysis8").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 1){
document.getElementById("analysisInformation28").style.display = "block";
} else {
document.getElementById("analysisInformation28").style.display = "none";
}
} );

$("#numAnalysis8").change(function() {
var numberOfAnalysis = $("#numAnalysis8").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 2){
document.getElementById("analysisInformation38").style.display = "block";
} else {
document.getElementById("analysisInformation38").style.display = "none";
}
} );

$("#numAnalysis9").change(function() {
var numberOfAnalysis = $("#numAnalysis9").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 0){
document.getElementById("analysisInformation19").style.display = "block";
} else {
document.getElementById("analysisInformation19").style.display = "none";
}
} );

$("#numAnalysis9").change(function() {
var numberOfAnalysis = $("#numAnalysis9").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 1){
document.getElementById("analysisInformation29").style.display = "block";
} else {
document.getElementById("analysisInformation29").style.display = "none";
}
} );

$("#numAnalysis9").change(function() {
var numberOfAnalysis = $("#numAnalysis9").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 2){
document.getElementById("analysisInformation39").style.display = "block";
} else {
document.getElementById("analysisInformation39").style.display = "none";
}
} );

$("#numAnalysis10").change(function() {
var numberOfAnalysis = $("#numAnalysis10").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 0){
document.getElementById("analysisInformation110").style.display = "block";
} else {
document.getElementById("analysisInformation110").style.display = "none";
}
} );

$("#numAnalysis10").change(function() {
var numberOfAnalysis = $("#numAnalysis10").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 1){
document.getElementById("analysisInformation210").style.display = "block";
} else {
document.getElementById("analysisInformation210").style.display = "none";
}
} );

$("#numAnalysis10").change(function() {
var numberOfAnalysis = $("#numAnalysis10").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 2){
document.getElementById("analysisInformation310").style.display = "block";
} else {
document.getElementById("analysisInformation310").style.display = "none";
}
} );

$("#numAnalysis11").change(function() {
var numberOfAnalysis = $("#numAnalysis11").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 0){
document.getElementById("analysisInformation111").style.display = "block";
} else {
document.getElementById("analysisInformation111").style.display = "none";
}
} );

$("#numAnalysis11").change(function() {
var numberOfAnalysis = $("#numAnalysis11").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 1){
document.getElementById("analysisInformation211").style.display = "block";
} else {
document.getElementById("analysisInformation211").style.display = "none";
}
} );

$("#numAnalysis11").change(function() {
var numberOfAnalysis = $("#numAnalysis11").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 2){
document.getElementById("analysisInformation311").style.display = "block";
} else {
document.getElementById("analysisInformation311").style.display = "none";
}
} );

$("#numAnalysis12").change(function() {
var numberOfAnalysis = $("#numAnalysis12").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 0){
document.getElementById("analysisInformation112").style.display = "block";
} else {
document.getElementById("analysisInformation112").style.display = "none";
}
} );

$("#numAnalysis12").change(function() {
var numberOfAnalysis = $("#numAnalysis12").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 1){
document.getElementById("analysisInformation212").style.display = "block";
} else {
document.getElementById("analysisInformation212").style.display = "none";
}
} );

$("#numAnalysis12").change(function() {
var numberOfAnalysis = $("#numAnalysis12").val();
console.log(numberOfAnalysis);
console.log("number of analysis");
if (parseInt(numberOfAnalysis) > 2){
document.getElementById("analysisInformation312").style.display = "block";
} else {
document.getElementById("analysisInformation312").style.display = "none";
}
} );

$("#analysis11").change(function() {
var analysis = $("#analysis11").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation11").style.display = "none";
document.getElementById("binSpecifics11").style.display = "none";
document.getElementById("threshold11").style.display = "block";
console.log("11");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation11").style.display = "block";
document.getElementById("binSpecifics11").style.display = "block";
document.getElementById("threshold11").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation11").style.display = "none";
document.getElementById("binSpecifics11").style.display = "none";
document.getElementById("threshold11").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation11").style.display = "block";
document.getElementById("binSpecifics11").style.display = "block";
document.getElementById("threshold11").style.display = "block";
}
} );

$("#analysis21").change(function() {
var analysis = $("#analysis21").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation21").style.display = "none";
document.getElementById("binSpecifics21").style.display = "none";
document.getElementById("threshold21").style.display = "block";
console.log("21");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation21").style.display = "block";
document.getElementById("binSpecifics21").style.display = "block";
document.getElementById("threshold21").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation21").style.display = "none";
document.getElementById("binSpecifics21").style.display = "none";
document.getElementById("threshold21").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation21").style.display = "block";
document.getElementById("binSpecifics21").style.display = "block";
document.getElementById("threshold21").style.display = "block";
}
} );

$("#analysis31").change(function() {
var analysis = $("#analysis31").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation31").style.display = "none";
document.getElementById("binSpecifics31").style.display = "none";
document.getElementById("threshold31").style.display = "block";
console.log("31");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation31").style.display = "block";
document.getElementById("binSpecifics31").style.display = "block";
document.getElementById("threshold31").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation31").style.display = "none";
document.getElementById("binSpecifics31").style.display = "none";
document.getElementById("threshold31").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation31").style.display = "block";
document.getElementById("binSpecifics31").style.display = "block";
document.getElementById("threshold31").style.display = "block";
}
} );

$("#analysis12").change(function() {
var analysis = $("#analysis12").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation12").style.display = "none";
document.getElementById("binSpecifics12").style.display = "none";
document.getElementById("threshold12").style.display = "block";
console.log("12");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation12").style.display = "block";
document.getElementById("binSpecifics12").style.display = "block";
document.getElementById("threshold12").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation12").style.display = "none";
document.getElementById("binSpecifics12").style.display = "none";
document.getElementById("threshold12").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation12").style.display = "block";
document.getElementById("binSpecifics12").style.display = "block";
document.getElementById("threshold12").style.display = "block";
}
} );

$("#analysis22").change(function() {
var analysis = $("#analysis22").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation22").style.display = "none";
document.getElementById("binSpecifics22").style.display = "none";
document.getElementById("threshold22").style.display = "block";
console.log("22");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation22").style.display = "block";
document.getElementById("binSpecifics22").style.display = "block";
document.getElementById("threshold22").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation22").style.display = "none";
document.getElementById("binSpecifics22").style.display = "none";
document.getElementById("threshold22").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation22").style.display = "block";
document.getElementById("binSpecifics22").style.display = "block";
document.getElementById("threshold22").style.display = "block";
}
} );

$("#analysis32").change(function() {
var analysis = $("#analysis32").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation32").style.display = "none";
document.getElementById("binSpecifics32").style.display = "none";
document.getElementById("threshold32").style.display = "block";
console.log("32");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation32").style.display = "block";
document.getElementById("binSpecifics32").style.display = "block";
document.getElementById("threshold32").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation32").style.display = "none";
document.getElementById("binSpecifics32").style.display = "none";
document.getElementById("threshold32").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation32").style.display = "block";
document.getElementById("binSpecifics32").style.display = "block";
document.getElementById("threshold32").style.display = "block";
}
} );

$("#analysis13").change(function() {
var analysis = $("#analysis13").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation13").style.display = "none";
document.getElementById("binSpecifics13").style.display = "none";
document.getElementById("threshold13").style.display = "block";
console.log("13");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation13").style.display = "block";
document.getElementById("binSpecifics13").style.display = "block";
document.getElementById("threshold13").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation13").style.display = "none";
document.getElementById("binSpecifics13").style.display = "none";
document.getElementById("threshold13").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation13").style.display = "block";
document.getElementById("binSpecifics13").style.display = "block";
document.getElementById("threshold13").style.display = "block";
}
} );

$("#analysis23").change(function() {
var analysis = $("#analysis23").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation23").style.display = "none";
document.getElementById("binSpecifics23").style.display = "none";
document.getElementById("threshold23").style.display = "block";
console.log("23");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation23").style.display = "block";
document.getElementById("binSpecifics23").style.display = "block";
document.getElementById("threshold23").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation23").style.display = "none";
document.getElementById("binSpecifics23").style.display = "none";
document.getElementById("threshold23").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation23").style.display = "block";
document.getElementById("binSpecifics23").style.display = "block";
document.getElementById("threshold23").style.display = "block";
}
} );

$("#analysis33").change(function() {
var analysis = $("#analysis33").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation33").style.display = "none";
document.getElementById("binSpecifics33").style.display = "none";
document.getElementById("threshold33").style.display = "block";
console.log("33");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation33").style.display = "block";
document.getElementById("binSpecifics33").style.display = "block";
document.getElementById("threshold33").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation33").style.display = "none";
document.getElementById("binSpecifics33").style.display = "none";
document.getElementById("threshold33").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation33").style.display = "block";
document.getElementById("binSpecifics33").style.display = "block";
document.getElementById("threshold33").style.display = "block";
}
} );

$("#analysis14").change(function() {
var analysis = $("#analysis14").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation14").style.display = "none";
document.getElementById("binSpecifics14").style.display = "none";
document.getElementById("threshold14").style.display = "block";
console.log("14");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation14").style.display = "block";
document.getElementById("binSpecifics14").style.display = "block";
document.getElementById("threshold14").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation14").style.display = "none";
document.getElementById("binSpecifics14").style.display = "none";
document.getElementById("threshold14").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation14").style.display = "block";
document.getElementById("binSpecifics14").style.display = "block";
document.getElementById("threshold14").style.display = "block";
}
} );

$("#analysis24").change(function() {
var analysis = $("#analysis24").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation24").style.display = "none";
document.getElementById("binSpecifics24").style.display = "none";
document.getElementById("threshold24").style.display = "block";
console.log("24");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation24").style.display = "block";
document.getElementById("binSpecifics24").style.display = "block";
document.getElementById("threshold24").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation24").style.display = "none";
document.getElementById("binSpecifics24").style.display = "none";
document.getElementById("threshold24").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation24").style.display = "block";
document.getElementById("binSpecifics24").style.display = "block";
document.getElementById("threshold24").style.display = "block";
}
} );

$("#analysis34").change(function() {
var analysis = $("#analysis34").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation34").style.display = "none";
document.getElementById("binSpecifics34").style.display = "none";
document.getElementById("threshold34").style.display = "block";
console.log("34");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation34").style.display = "block";
document.getElementById("binSpecifics34").style.display = "block";
document.getElementById("threshold34").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation34").style.display = "none";
document.getElementById("binSpecifics34").style.display = "none";
document.getElementById("threshold34").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation34").style.display = "block";
document.getElementById("binSpecifics34").style.display = "block";
document.getElementById("threshold34").style.display = "block";
}
} );

$("#analysis15").change(function() {
var analysis = $("#analysis15").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation15").style.display = "none";
document.getElementById("binSpecifics15").style.display = "none";
document.getElementById("threshold15").style.display = "block";
console.log("15");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation15").style.display = "block";
document.getElementById("binSpecifics15").style.display = "block";
document.getElementById("threshold15").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation15").style.display = "none";
document.getElementById("binSpecifics15").style.display = "none";
document.getElementById("threshold15").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation15").style.display = "block";
document.getElementById("binSpecifics15").style.display = "block";
document.getElementById("threshold15").style.display = "block";
}
} );

$("#analysis25").change(function() {
var analysis = $("#analysis25").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation25").style.display = "none";
document.getElementById("binSpecifics25").style.display = "none";
document.getElementById("threshold25").style.display = "block";
console.log("25");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation25").style.display = "block";
document.getElementById("binSpecifics25").style.display = "block";
document.getElementById("threshold25").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation25").style.display = "none";
document.getElementById("binSpecifics25").style.display = "none";
document.getElementById("threshold25").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation25").style.display = "block";
document.getElementById("binSpecifics25").style.display = "block";
document.getElementById("threshold25").style.display = "block";
}
} );

$("#analysis35").change(function() {
var analysis = $("#analysis35").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation35").style.display = "none";
document.getElementById("binSpecifics35").style.display = "none";
document.getElementById("threshold35").style.display = "block";
console.log("35");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation35").style.display = "block";
document.getElementById("binSpecifics35").style.display = "block";
document.getElementById("threshold35").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation35").style.display = "none";
document.getElementById("binSpecifics35").style.display = "none";
document.getElementById("threshold35").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation35").style.display = "block";
document.getElementById("binSpecifics35").style.display = "block";
document.getElementById("threshold35").style.display = "block";
}
} );

$("#analysis16").change(function() {
var analysis = $("#analysis16").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation16").style.display = "none";
document.getElementById("binSpecifics16").style.display = "none";
document.getElementById("threshold16").style.display = "block";
console.log("16");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation16").style.display = "block";
document.getElementById("binSpecifics16").style.display = "block";
document.getElementById("threshold16").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation16").style.display = "none";
document.getElementById("binSpecifics16").style.display = "none";
document.getElementById("threshold16").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation16").style.display = "block";
document.getElementById("binSpecifics16").style.display = "block";
document.getElementById("threshold16").style.display = "block";
}
} );

$("#analysis26").change(function() {
var analysis = $("#analysis26").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation26").style.display = "none";
document.getElementById("binSpecifics26").style.display = "none";
document.getElementById("threshold26").style.display = "block";
console.log("26");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation26").style.display = "block";
document.getElementById("binSpecifics26").style.display = "block";
document.getElementById("threshold26").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation26").style.display = "none";
document.getElementById("binSpecifics26").style.display = "none";
document.getElementById("threshold26").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation26").style.display = "block";
document.getElementById("binSpecifics26").style.display = "block";
document.getElementById("threshold26").style.display = "block";
}
} );

$("#analysis36").change(function() {
var analysis = $("#analysis36").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation36").style.display = "none";
document.getElementById("binSpecifics36").style.display = "none";
document.getElementById("threshold36").style.display = "block";
console.log("36");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation36").style.display = "block";
document.getElementById("binSpecifics36").style.display = "block";
document.getElementById("threshold36").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation36").style.display = "none";
document.getElementById("binSpecifics36").style.display = "none";
document.getElementById("threshold36").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation36").style.display = "block";
document.getElementById("binSpecifics36").style.display = "block";
document.getElementById("threshold36").style.display = "block";
}
} );

$("#analysis17").change(function() {
var analysis = $("#analysis17").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation17").style.display = "none";
document.getElementById("binSpecifics17").style.display = "none";
document.getElementById("threshold17").style.display = "block";
console.log("17");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation17").style.display = "block";
document.getElementById("binSpecifics17").style.display = "block";
document.getElementById("threshold17").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation17").style.display = "none";
document.getElementById("binSpecifics17").style.display = "none";
document.getElementById("threshold17").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation17").style.display = "block";
document.getElementById("binSpecifics17").style.display = "block";
document.getElementById("threshold17").style.display = "block";
}
} );

$("#analysis27").change(function() {
var analysis = $("#analysis27").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation27").style.display = "none";
document.getElementById("binSpecifics27").style.display = "none";
document.getElementById("threshold27").style.display = "block";
console.log("27");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation27").style.display = "block";
document.getElementById("binSpecifics27").style.display = "block";
document.getElementById("threshold27").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation27").style.display = "none";
document.getElementById("binSpecifics27").style.display = "none";
document.getElementById("threshold27").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation27").style.display = "block";
document.getElementById("binSpecifics27").style.display = "block";
document.getElementById("threshold27").style.display = "block";
}
} );

$("#analysis37").change(function() {
var analysis = $("#analysis37").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation37").style.display = "none";
document.getElementById("binSpecifics37").style.display = "none";
document.getElementById("threshold37").style.display = "block";
console.log("37");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation37").style.display = "block";
document.getElementById("binSpecifics37").style.display = "block";
document.getElementById("threshold37").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation37").style.display = "none";
document.getElementById("binSpecifics37").style.display = "none";
document.getElementById("threshold37").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation37").style.display = "block";
document.getElementById("binSpecifics37").style.display = "block";
document.getElementById("threshold37").style.display = "block";
}
} );

$("#analysis18").change(function() {
var analysis = $("#analysis18").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation18").style.display = "none";
document.getElementById("binSpecifics18").style.display = "none";
document.getElementById("threshold18").style.display = "block";
console.log("18");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation18").style.display = "block";
document.getElementById("binSpecifics18").style.display = "block";
document.getElementById("threshold18").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation18").style.display = "none";
document.getElementById("binSpecifics18").style.display = "none";
document.getElementById("threshold18").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation18").style.display = "block";
document.getElementById("binSpecifics18").style.display = "block";
document.getElementById("threshold18").style.display = "block";
}
} );

$("#analysis28").change(function() {
var analysis = $("#analysis28").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation28").style.display = "none";
document.getElementById("binSpecifics28").style.display = "none";
document.getElementById("threshold28").style.display = "block";
console.log("28");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation28").style.display = "block";
document.getElementById("binSpecifics28").style.display = "block";
document.getElementById("threshold28").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation28").style.display = "none";
document.getElementById("binSpecifics28").style.display = "none";
document.getElementById("threshold28").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation28").style.display = "block";
document.getElementById("binSpecifics28").style.display = "block";
document.getElementById("threshold28").style.display = "block";
}
} );

$("#analysis38").change(function() {
var analysis = $("#analysis38").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation38").style.display = "none";
document.getElementById("binSpecifics38").style.display = "none";
document.getElementById("threshold38").style.display = "block";
console.log("38");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation38").style.display = "block";
document.getElementById("binSpecifics38").style.display = "block";
document.getElementById("threshold38").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation38").style.display = "none";
document.getElementById("binSpecifics38").style.display = "none";
document.getElementById("threshold38").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation38").style.display = "block";
document.getElementById("binSpecifics38").style.display = "block";
document.getElementById("threshold38").style.display = "block";
}
} );

$("#analysis19").change(function() {
var analysis = $("#analysis19").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation19").style.display = "none";
document.getElementById("binSpecifics19").style.display = "none";
document.getElementById("threshold19").style.display = "block";
console.log("19");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation19").style.display = "block";
document.getElementById("binSpecifics19").style.display = "block";
document.getElementById("threshold19").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation19").style.display = "none";
document.getElementById("binSpecifics19").style.display = "none";
document.getElementById("threshold19").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation19").style.display = "block";
document.getElementById("binSpecifics19").style.display = "block";
document.getElementById("threshold19").style.display = "block";
}
} );

$("#analysis29").change(function() {
var analysis = $("#analysis29").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation29").style.display = "none";
document.getElementById("binSpecifics29").style.display = "none";
document.getElementById("threshold29").style.display = "block";
console.log("29");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation29").style.display = "block";
document.getElementById("binSpecifics29").style.display = "block";
document.getElementById("threshold29").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation29").style.display = "none";
document.getElementById("binSpecifics29").style.display = "none";
document.getElementById("threshold29").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation29").style.display = "block";
document.getElementById("binSpecifics29").style.display = "block";
document.getElementById("threshold29").style.display = "block";
}
} );

$("#analysis39").change(function() {
var analysis = $("#analysis39").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation39").style.display = "none";
document.getElementById("binSpecifics39").style.display = "none";
document.getElementById("threshold39").style.display = "block";
console.log("39");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation39").style.display = "block";
document.getElementById("binSpecifics39").style.display = "block";
document.getElementById("threshold39").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation39").style.display = "none";
document.getElementById("binSpecifics39").style.display = "none";
document.getElementById("threshold39").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation39").style.display = "block";
document.getElementById("binSpecifics39").style.display = "block";
document.getElementById("threshold39").style.display = "block";
}
} );

$("#analysis20").change(function() {
var analysis = $("#analysis20").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation110").style.display = "none";
document.getElementById("binSpecifics110").style.display = "none";
document.getElementById("threshold110").style.display = "block";
console.log("110");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation110").style.display = "block";
document.getElementById("binSpecifics110").style.display = "block";
document.getElementById("threshold110").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation110").style.display = "none";
document.getElementById("binSpecifics110").style.display = "none";
document.getElementById("threshold110").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation110").style.display = "block";
document.getElementById("binSpecifics110").style.display = "block";
document.getElementById("threshold110").style.display = "block";
}
} );

$("#analysis30").change(function() {
var analysis = $("#analysis30").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation210").style.display = "none";
document.getElementById("binSpecifics210").style.display = "none";
document.getElementById("threshold210").style.display = "block";
console.log("210");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation210").style.display = "block";
document.getElementById("binSpecifics210").style.display = "block";
document.getElementById("threshold210").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation210").style.display = "none";
document.getElementById("binSpecifics210").style.display = "none";
document.getElementById("threshold210").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation210").style.display = "block";
document.getElementById("binSpecifics210").style.display = "block";
document.getElementById("threshold210").style.display = "block";
}
} );

$("#analysis40").change(function() {
var analysis = $("#analysis40").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation310").style.display = "none";
document.getElementById("binSpecifics310").style.display = "none";
document.getElementById("threshold310").style.display = "block";
console.log("310");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation310").style.display = "block";
document.getElementById("binSpecifics310").style.display = "block";
document.getElementById("threshold310").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation310").style.display = "none";
document.getElementById("binSpecifics310").style.display = "none";
document.getElementById("threshold310").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation310").style.display = "block";
document.getElementById("binSpecifics310").style.display = "block";
document.getElementById("threshold310").style.display = "block";
}
} );

$("#analysis111").change(function() {
var analysis = $("#analysis111").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation111").style.display = "none";
document.getElementById("binSpecifics111").style.display = "none";
document.getElementById("threshold111").style.display = "block";
console.log("111");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation111").style.display = "block";
document.getElementById("binSpecifics111").style.display = "block";
document.getElementById("threshold111").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation111").style.display = "none";
document.getElementById("binSpecifics111").style.display = "none";
document.getElementById("threshold111").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation111").style.display = "block";
document.getElementById("binSpecifics111").style.display = "block";
document.getElementById("threshold111").style.display = "block";
}
} );

$("#analysis211").change(function() {
var analysis = $("#analysis211").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation211").style.display = "none";
document.getElementById("binSpecifics211").style.display = "none";
document.getElementById("threshold211").style.display = "block";
console.log("211");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation211").style.display = "block";
document.getElementById("binSpecifics211").style.display = "block";
document.getElementById("threshold211").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation211").style.display = "none";
document.getElementById("binSpecifics211").style.display = "none";
document.getElementById("threshold211").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation211").style.display = "block";
document.getElementById("binSpecifics211").style.display = "block";
document.getElementById("threshold211").style.display = "block";
}
} );

$("#analysis311").change(function() {
var analysis = $("#analysis311").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation311").style.display = "none";
document.getElementById("binSpecifics311").style.display = "none";
document.getElementById("threshold311").style.display = "block";
console.log("311");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation311").style.display = "block";
document.getElementById("binSpecifics311").style.display = "block";
document.getElementById("threshold311").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation311").style.display = "none";
document.getElementById("binSpecifics311").style.display = "none";
document.getElementById("threshold311").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation311").style.display = "block";
document.getElementById("binSpecifics311").style.display = "block";
document.getElementById("threshold311").style.display = "block";
}
} );

$("#analysis112").change(function() {
var analysis = $("#analysis112").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation112").style.display = "none";
document.getElementById("binSpecifics112").style.display = "none";
document.getElementById("threshold112").style.display = "block";
console.log("112");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation112").style.display = "block";
document.getElementById("binSpecifics112").style.display = "block";
document.getElementById("threshold112").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation112").style.display = "none";
document.getElementById("binSpecifics112").style.display = "none";
document.getElementById("threshold112").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation112").style.display = "block";
document.getElementById("binSpecifics112").style.display = "block";
document.getElementById("threshold112").style.display = "block";
}
} );

$("#analysis212").change(function() {
var analysis = $("#analysis212").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation212").style.display = "none";
document.getElementById("binSpecifics212").style.display = "none";
document.getElementById("threshold212").style.display = "block";
console.log("212");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation212").style.display = "block";
document.getElementById("binSpecifics212").style.display = "block";
document.getElementById("threshold212").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation212").style.display = "none";
document.getElementById("binSpecifics212").style.display = "none";
document.getElementById("threshold212").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation212").style.display = "block";
document.getElementById("binSpecifics212").style.display = "block";
document.getElementById("threshold212").style.display = "block";
}
} );

$("#analysis312").change(function() {
var analysis = $("#analysis312").val();
console.log(analysis);
console.log("analysis type");
console.log(analysis=="On-Peak Off-Peak %");
if (analysis == "On-Peak Off-Peak %"){
document.getElementById("binInformation312").style.display = "none";
document.getElementById("binSpecifics312").style.display = "none";
document.getElementById("threshold312").style.display = "block";
console.log("312");
} else if (analysis == "Min-Max"){
document.getElementById("binInformation312").style.display = "block";
document.getElementById("binSpecifics312").style.display = "block";
document.getElementById("threshold312").style.display = "none";
} else if (analysis == "kWh"){
document.getElementById("binInformation312").style.display = "none";
document.getElementById("binSpecifics312").style.display = "none";
document.getElementById("threshold312").style.display = "none";
} else if (analysis == "Range Analysis"){
document.getElementById("binInformation312").style.display = "block";
document.getElementById("binSpecifics312").style.display = "block";
document.getElementById("threshold312").style.display = "block";
}
} );

$("#binChoice11").change(function() {
var bins = $("#binChoice11").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock11").style.display = "none";
document.getElementById("fromSensorBlock11").style.display = "block";
document.getElementById("summaryMethod11").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock11").style.display = "block";
document.getElementById("fromSensorBlock11").style.display = "none";
document.getElementById("summaryMethod11").style.display = "block";
} else {
document.getElementById("customTimeBlock11").style.display = "none";
document.getElementById("fromSensorBlock11").style.display = "none";
document.getElementById("summaryMethod11").style.display = "none";
}
} );

$("#binChoice21").change(function() {
var bins = $("#binChoice21").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock21").style.display = "none";
document.getElementById("fromSensorBlock21").style.display = "block";
document.getElementById("summaryMethod21").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock21").style.display = "block";
document.getElementById("fromSensorBlock21").style.display = "none";
document.getElementById("summaryMethod21").style.display = "block";
} else {
document.getElementById("customTimeBlock21").style.display = "none";
document.getElementById("fromSensorBlock21").style.display = "none";
document.getElementById("summaryMethod21").style.display = "none";
}
} );

$("#binChoice31").change(function() {
var bins = $("#binChoice31").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock31").style.display = "none";
document.getElementById("fromSensorBlock31").style.display = "block";
document.getElementById("summaryMethod31").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock31").style.display = "block";
document.getElementById("fromSensorBlock31").style.display = "none";
document.getElementById("summaryMethod31").style.display = "block";
} else {
document.getElementById("customTimeBlock31").style.display = "none";
document.getElementById("fromSensorBlock31").style.display = "none";
document.getElementById("summaryMethod31").style.display = "none";
}
} );

$("#binChoice12").change(function() {
var bins = $("#binChoice12").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock12").style.display = "none";
document.getElementById("fromSensorBlock12").style.display = "block";
document.getElementById("summaryMethod12").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock12").style.display = "block";
document.getElementById("fromSensorBlock12").style.display = "none";
document.getElementById("summaryMethod12").style.display = "block";
} else {
document.getElementById("customTimeBlock12").style.display = "none";
document.getElementById("fromSensorBlock12").style.display = "none";
document.getElementById("summaryMethod12").style.display = "none";
}
} );

$("#binChoice22").change(function() {
var bins = $("#binChoice22").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock22").style.display = "none";
document.getElementById("fromSensorBlock22").style.display = "block";
document.getElementById("summaryMethod22").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock22").style.display = "block";
document.getElementById("fromSensorBlock22").style.display = "none";
document.getElementById("summaryMethod22").style.display = "block";
} else {
document.getElementById("customTimeBlock22").style.display = "none";
document.getElementById("fromSensorBlock22").style.display = "none";
document.getElementById("summaryMethod22").style.display = "none";
}
} );

$("#binChoice32").change(function() {
var bins = $("#binChoice32").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock32").style.display = "none";
document.getElementById("fromSensorBlock32").style.display = "block";
document.getElementById("summaryMethod32").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock32").style.display = "block";
document.getElementById("fromSensorBlock32").style.display = "none";
document.getElementById("summaryMethod32").style.display = "block";
} else {
document.getElementById("customTimeBlock32").style.display = "none";
document.getElementById("fromSensorBlock32").style.display = "none";
document.getElementById("summaryMethod32").style.display = "none";
}
} );

$("#binChoice13").change(function() {
var bins = $("#binChoice13").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock13").style.display = "none";
document.getElementById("fromSensorBlock13").style.display = "block";
document.getElementById("summaryMethod13").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock13").style.display = "block";
document.getElementById("fromSensorBlock13").style.display = "none";
document.getElementById("summaryMethod13").style.display = "block";
} else {
document.getElementById("customTimeBlock13").style.display = "none";
document.getElementById("fromSensorBlock13").style.display = "none";
document.getElementById("summaryMethod13").style.display = "none";
}
} );

$("#binChoice23").change(function() {
var bins = $("#binChoice23").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock23").style.display = "none";
document.getElementById("fromSensorBlock23").style.display = "block";
document.getElementById("summaryMethod23").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock23").style.display = "block";
document.getElementById("fromSensorBlock23").style.display = "none";
document.getElementById("summaryMethod23").style.display = "block";
} else {
document.getElementById("customTimeBlock23").style.display = "none";
document.getElementById("fromSensorBlock23").style.display = "none";
document.getElementById("summaryMethod23").style.display = "none";
}
} );

$("#binChoice33").change(function() {
var bins = $("#binChoice33").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock33").style.display = "none";
document.getElementById("fromSensorBlock33").style.display = "block";
document.getElementById("summaryMethod33").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock33").style.display = "block";
document.getElementById("fromSensorBlock33").style.display = "none";
document.getElementById("summaryMethod33").style.display = "block";
} else {
document.getElementById("customTimeBlock33").style.display = "none";
document.getElementById("fromSensorBlock33").style.display = "none";
document.getElementById("summaryMethod33").style.display = "none";
}
} );

$("#binChoice14").change(function() {
var bins = $("#binChoice14").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock14").style.display = "none";
document.getElementById("fromSensorBlock14").style.display = "block";
document.getElementById("summaryMethod14").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock14").style.display = "block";
document.getElementById("fromSensorBlock14").style.display = "none";
document.getElementById("summaryMethod14").style.display = "block";
} else {
document.getElementById("customTimeBlock14").style.display = "none";
document.getElementById("fromSensorBlock14").style.display = "none";
document.getElementById("summaryMethod14").style.display = "none";
}
} );

$("#binChoice24").change(function() {
var bins = $("#binChoice24").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock24").style.display = "none";
document.getElementById("fromSensorBlock24").style.display = "block";
document.getElementById("summaryMethod24").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock24").style.display = "block";
document.getElementById("fromSensorBlock24").style.display = "none";
document.getElementById("summaryMethod24").style.display = "block";
} else {
document.getElementById("customTimeBlock24").style.display = "none";
document.getElementById("fromSensorBlock24").style.display = "none";
document.getElementById("summaryMethod24").style.display = "none";
}
} );

$("#binChoice34").change(function() {
var bins = $("#binChoice34").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock34").style.display = "none";
document.getElementById("fromSensorBlock34").style.display = "block";
document.getElementById("summaryMethod34").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock34").style.display = "block";
document.getElementById("fromSensorBlock34").style.display = "none";
document.getElementById("summaryMethod34").style.display = "block";
} else {
document.getElementById("customTimeBlock34").style.display = "none";
document.getElementById("fromSensorBlock34").style.display = "none";
document.getElementById("summaryMethod34").style.display = "none";
}
} );

$("#binChoice15").change(function() {
var bins = $("#binChoice15").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock15").style.display = "none";
document.getElementById("fromSensorBlock15").style.display = "block";
document.getElementById("summaryMethod15").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock15").style.display = "block";
document.getElementById("fromSensorBlock15").style.display = "none";
document.getElementById("summaryMethod15").style.display = "block";
} else {
document.getElementById("customTimeBlock15").style.display = "none";
document.getElementById("fromSensorBlock15").style.display = "none";
document.getElementById("summaryMethod15").style.display = "none";
}
} );

$("#binChoice25").change(function() {
var bins = $("#binChoice25").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock25").style.display = "none";
document.getElementById("fromSensorBlock25").style.display = "block";
document.getElementById("summaryMethod25").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock25").style.display = "block";
document.getElementById("fromSensorBlock25").style.display = "none";
document.getElementById("summaryMethod25").style.display = "block";
} else {
document.getElementById("customTimeBlock25").style.display = "none";
document.getElementById("fromSensorBlock25").style.display = "none";
document.getElementById("summaryMethod25").style.display = "none";
}
} );

$("#binChoice35").change(function() {
var bins = $("#binChoice35").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock35").style.display = "none";
document.getElementById("fromSensorBlock35").style.display = "block";
document.getElementById("summaryMethod35").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock35").style.display = "block";
document.getElementById("fromSensorBlock35").style.display = "none";
document.getElementById("summaryMethod35").style.display = "block";
} else {
document.getElementById("customTimeBlock35").style.display = "none";
document.getElementById("fromSensorBlock35").style.display = "none";
document.getElementById("summaryMethod35").style.display = "none";
}
} );

$("#binChoice16").change(function() {
var bins = $("#binChoice16").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock16").style.display = "none";
document.getElementById("fromSensorBlock16").style.display = "block";
document.getElementById("summaryMethod16").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock16").style.display = "block";
document.getElementById("fromSensorBlock16").style.display = "none";
document.getElementById("summaryMethod16").style.display = "block";
} else {
document.getElementById("customTimeBlock16").style.display = "none";
document.getElementById("fromSensorBlock16").style.display = "none";
document.getElementById("summaryMethod16").style.display = "none";
}
} );

$("#binChoice26").change(function() {
var bins = $("#binChoice26").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock26").style.display = "none";
document.getElementById("fromSensorBlock26").style.display = "block";
document.getElementById("summaryMethod26").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock26").style.display = "block";
document.getElementById("fromSensorBlock26").style.display = "none";
document.getElementById("summaryMethod26").style.display = "block";
} else {
document.getElementById("customTimeBlock26").style.display = "none";
document.getElementById("fromSensorBlock26").style.display = "none";
document.getElementById("summaryMethod26").style.display = "none";
}
} );

$("#binChoice36").change(function() {
var bins = $("#binChoice36").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock36").style.display = "none";
document.getElementById("fromSensorBlock36").style.display = "block";
document.getElementById("summaryMethod36").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock36").style.display = "block";
document.getElementById("fromSensorBlock36").style.display = "none";
document.getElementById("summaryMethod36").style.display = "block";
} else {
document.getElementById("customTimeBlock36").style.display = "none";
document.getElementById("fromSensorBlock36").style.display = "none";
document.getElementById("summaryMethod36").style.display = "none";
}
} );

$("#binChoice17").change(function() {
var bins = $("#binChoice17").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock17").style.display = "none";
document.getElementById("fromSensorBlock17").style.display = "block";
document.getElementById("summaryMethod17").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock17").style.display = "block";
document.getElementById("fromSensorBlock17").style.display = "none";
document.getElementById("summaryMethod17").style.display = "block";
} else {
document.getElementById("customTimeBlock17").style.display = "none";
document.getElementById("fromSensorBlock17").style.display = "none";
document.getElementById("summaryMethod17").style.display = "none";
}
} );

$("#binChoice27").change(function() {
var bins = $("#binChoice27").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock27").style.display = "none";
document.getElementById("fromSensorBlock27").style.display = "block";
document.getElementById("summaryMethod27").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock27").style.display = "block";
document.getElementById("fromSensorBlock27").style.display = "none";
document.getElementById("summaryMethod27").style.display = "block";
} else {
document.getElementById("customTimeBlock27").style.display = "none";
document.getElementById("fromSensorBlock27").style.display = "none";
document.getElementById("summaryMethod27").style.display = "none";
}
} );

$("#binChoice37").change(function() {
var bins = $("#binChoice37").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock37").style.display = "none";
document.getElementById("fromSensorBlock37").style.display = "block";
document.getElementById("summaryMethod37").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock37").style.display = "block";
document.getElementById("fromSensorBlock37").style.display = "none";
document.getElementById("summaryMethod37").style.display = "block";
} else {
document.getElementById("customTimeBlock37").style.display = "none";
document.getElementById("fromSensorBlock37").style.display = "none";
document.getElementById("summaryMethod37").style.display = "none";
}
} );

$("#binChoice18").change(function() {
var bins = $("#binChoice18").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock18").style.display = "none";
document.getElementById("fromSensorBlock18").style.display = "block";
document.getElementById("summaryMethod18").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock18").style.display = "block";
document.getElementById("fromSensorBlock18").style.display = "none";
document.getElementById("summaryMethod18").style.display = "block";
} else {
document.getElementById("customTimeBlock18").style.display = "none";
document.getElementById("fromSensorBlock18").style.display = "none";
document.getElementById("summaryMethod18").style.display = "none";
}
} );

$("#binChoice28").change(function() {
var bins = $("#binChoice28").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock28").style.display = "none";
document.getElementById("fromSensorBlock28").style.display = "block";
document.getElementById("summaryMethod28").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock28").style.display = "block";
document.getElementById("fromSensorBlock28").style.display = "none";
document.getElementById("summaryMethod28").style.display = "block";
} else {
document.getElementById("customTimeBlock28").style.display = "none";
document.getElementById("fromSensorBlock28").style.display = "none";
document.getElementById("summaryMethod28").style.display = "none";
}
} );

$("#binChoice38").change(function() {
var bins = $("#binChoice38").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock38").style.display = "none";
document.getElementById("fromSensorBlock38").style.display = "block";
document.getElementById("summaryMethod38").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock38").style.display = "block";
document.getElementById("fromSensorBlock38").style.display = "none";
document.getElementById("summaryMethod38").style.display = "block";
} else {
document.getElementById("customTimeBlock38").style.display = "none";
document.getElementById("fromSensorBlock38").style.display = "none";
document.getElementById("summaryMethod38").style.display = "none";
}
} );

$("#binChoice19").change(function() {
var bins = $("#binChoice19").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock19").style.display = "none";
document.getElementById("fromSensorBlock19").style.display = "block";
document.getElementById("summaryMethod19").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock19").style.display = "block";
document.getElementById("fromSensorBlock19").style.display = "none";
document.getElementById("summaryMethod19").style.display = "block";
} else {
document.getElementById("customTimeBlock19").style.display = "none";
document.getElementById("fromSensorBlock19").style.display = "none";
document.getElementById("summaryMethod19").style.display = "none";
}
} );

$("#binChoice29").change(function() {
var bins = $("#binChoice29").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock29").style.display = "none";
document.getElementById("fromSensorBlock29").style.display = "block";
document.getElementById("summaryMethod29").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock29").style.display = "block";
document.getElementById("fromSensorBlock29").style.display = "none";
document.getElementById("summaryMethod29").style.display = "block";
} else {
document.getElementById("customTimeBlock29").style.display = "none";
document.getElementById("fromSensorBlock29").style.display = "none";
document.getElementById("summaryMethod29").style.display = "none";
}
} );

$("#binChoice39").change(function() {
var bins = $("#binChoice39").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock39").style.display = "none";
document.getElementById("fromSensorBlock39").style.display = "block";
document.getElementById("summaryMethod39").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock39").style.display = "block";
document.getElementById("fromSensorBlock39").style.display = "none";
document.getElementById("summaryMethod39").style.display = "block";
} else {
document.getElementById("customTimeBlock39").style.display = "none";
document.getElementById("fromSensorBlock39").style.display = "none";
document.getElementById("summaryMethod39").style.display = "none";
}
} );

$("#binChoice20").change(function() {
var bins = $("#binChoice20").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock110").style.display = "none";
document.getElementById("fromSensorBlock110").style.display = "block";
document.getElementById("summaryMethod110").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock110").style.display = "block";
document.getElementById("fromSensorBlock110").style.display = "none";
document.getElementById("summaryMethod110").style.display = "block";
} else {
document.getElementById("customTimeBlock110").style.display = "none";
document.getElementById("fromSensorBlock110").style.display = "none";
document.getElementById("summaryMethod110").style.display = "none";
}
} );

$("#binChoice30").change(function() {
var bins = $("#binChoice30").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock210").style.display = "none";
document.getElementById("fromSensorBlock210").style.display = "block";
document.getElementById("summaryMethod210").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock210").style.display = "block";
document.getElementById("fromSensorBlock210").style.display = "none";
document.getElementById("summaryMethod210").style.display = "block";
} else {
document.getElementById("customTimeBlock210").style.display = "none";
document.getElementById("fromSensorBlock210").style.display = "none";
document.getElementById("summaryMethod210").style.display = "none";
}
} );

$("#binChoice40").change(function() {
var bins = $("#binChoice40").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock310").style.display = "none";
document.getElementById("fromSensorBlock310").style.display = "block";
document.getElementById("summaryMethod310").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock310").style.display = "block";
document.getElementById("fromSensorBlock310").style.display = "none";
document.getElementById("summaryMethod310").style.display = "block";
} else {
document.getElementById("customTimeBlock310").style.display = "none";
document.getElementById("fromSensorBlock310").style.display = "none";
document.getElementById("summaryMethod310").style.display = "none";
}
} );

$("#binChoice111").change(function() {
var bins = $("#binChoice111").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock111").style.display = "none";
document.getElementById("fromSensorBlock111").style.display = "block";
document.getElementById("summaryMethod111").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock111").style.display = "block";
document.getElementById("fromSensorBlock111").style.display = "none";
document.getElementById("summaryMethod111").style.display = "block";
} else {
document.getElementById("customTimeBlock111").style.display = "none";
document.getElementById("fromSensorBlock111").style.display = "none";
document.getElementById("summaryMethod111").style.display = "none";
}
} );

$("#binChoice211").change(function() {
var bins = $("#binChoice211").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock211").style.display = "none";
document.getElementById("fromSensorBlock211").style.display = "block";
document.getElementById("summaryMethod211").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock211").style.display = "block";
document.getElementById("fromSensorBlock211").style.display = "none";
document.getElementById("summaryMethod211").style.display = "block";
} else {
document.getElementById("customTimeBlock211").style.display = "none";
document.getElementById("fromSensorBlock211").style.display = "none";
document.getElementById("summaryMethod211").style.display = "none";
}
} );

$("#binChoice311").change(function() {
var bins = $("#binChoice311").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock311").style.display = "none";
document.getElementById("fromSensorBlock311").style.display = "block";
document.getElementById("summaryMethod311").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock311").style.display = "block";
document.getElementById("fromSensorBlock311").style.display = "none";
document.getElementById("summaryMethod311").style.display = "block";
} else {
document.getElementById("customTimeBlock311").style.display = "none";
document.getElementById("fromSensorBlock311").style.display = "none";
document.getElementById("summaryMethod311").style.display = "none";
}
} );

$("#binChoice112").change(function() {
var bins = $("#binChoice112").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock112").style.display = "none";
document.getElementById("fromSensorBlock112").style.display = "block";
document.getElementById("summaryMethod112").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock112").style.display = "block";
document.getElementById("fromSensorBlock112").style.display = "none";
document.getElementById("summaryMethod112").style.display = "block";
} else {
document.getElementById("customTimeBlock112").style.display = "none";
document.getElementById("fromSensorBlock112").style.display = "none";
document.getElementById("summaryMethod112").style.display = "none";
}
} );

$("#binChoice212").change(function() {
var bins = $("#binChoice212").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock212").style.display = "none";
document.getElementById("fromSensorBlock212").style.display = "block";
document.getElementById("summaryMethod212").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock212").style.display = "block";
document.getElementById("fromSensorBlock212").style.display = "none";
document.getElementById("summaryMethod212").style.display = "block";
} else {
document.getElementById("customTimeBlock212").style.display = "none";
document.getElementById("fromSensorBlock212").style.display = "none";
document.getElementById("summaryMethod212").style.display = "none";
}
} );

$("#binChoice312").change(function() {
var bins = $("#binChoice312").val();
console.log(bins);
if (bins == "From Sensor"){
document.getElementById("customTimeBlock312").style.display = "none";
document.getElementById("fromSensorBlock312").style.display = "block";
document.getElementById("summaryMethod312").style.display = "block";
} else if (bins == "Custom Time"){
document.getElementById("customTimeBlock312").style.display = "block";
document.getElementById("fromSensorBlock312").style.display = "none";
document.getElementById("summaryMethod312").style.display = "block";
} else {
document.getElementById("customTimeBlock312").style.display = "none";
document.getElementById("fromSensorBlock312").style.display = "none";
document.getElementById("summaryMethod312").style.display = "none";
}
} );

