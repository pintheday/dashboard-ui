$(window).load(function () {

var size = 1;
var button = 1;
var button_class = "gallery-header-center-right-links-current";
var normal_size_class = "gallery-content-center-normal";
var full_size_class = "gallery-content-center-full";
var $container = $('#gallery-content-center');

$container.isotope({itemSelector : 'img'});


function check_button(){
	$('.gallery-header-center-right-links').removeClass(button_class);
	if(button==1){
		$("#filter-all").addClass(button_class);
		$("#gallery-header-center-left-title").html('All Pictures');
		}
	if(button==2){
		$("#filter-studio").addClass(button_class);
		$("#gallery-header-center-left-title").html('Engagement Gallery');
		}
	if(button==3){
		$("#filter-landscape").addClass(button_class);
		$("#gallery-header-center-left-title").html('Marriage Gallery');
		}
}

function check_size(){
	$("#gallery-content-center").removeClass(normal_size_class).removeClass(full_size_class);
	if(size==0 || size ==1){
		$("#gallery-content-center").addClass(normal_size_class);
		$("#gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23a;"></span>');
		}
	if(false){
		$("#gallery-content-center").addClass(full_size_class);
		$("#gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23b;"></span>');
		}
	$container.isotope({itemSelector : 'img'});
}



$("#filter-all").click(function() {
	$container.isotope({ filter: '.all' });
	button = 1;
	check_button();
	$('a.all','a.studio','a.landscape').removeAttr("data-size");
	$('a.all').attr("data-size", "2880x1800");
});
$("#filter-studio").click(function() {
	$container.isotope({ filter: '.studio' });
	button = 2;
	check_button();
	$('a.all','a.studio','a.landscape').removeAttr("data-size");
	$('a.studio').attr("data-size", "2880x1800");
	$('a.all','a.landscape').removeAttr("data-size");
});
$("#filter-landscape").click(function() {
	$container.isotope({filter: '.landscape' });
	button = 3;
	check_button();
	$('a.all','a.studio','a.landscape').removeAttr("data-size");
	$('a.landscape').attr("data-size", "2880x1800");
	$('a.all','a.studio').removeAttr("data-size");
});
$("#gallery-header-center-left-icon").click(function() { if(size==0){size=1;}else if(size==1){size=0;} check_size(); });


check_button();
check_size();
});
