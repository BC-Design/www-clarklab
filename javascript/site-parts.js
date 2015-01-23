// add to a page by placing this in the <head>:
// <script type="text/javascript" src="javascript/site-parts.js"></script>

function insertNavBar() {
	var navBarHTML = '<div class="nav_sidebar">'
		+ '<a href="research.html"><p class="nav_sidebar_item">Research Interests</p></a>'
		+ '<a href="group_members.html"><p class="nav_sidebar_item">Group Members</p></a>'
		+ '<a href="publications.html"><p class="nav_sidebar_item">Publications</p></a>'
		+ '<a href="group_info.html"><p class="nav_sidebar_item">Group Info</p></a>'
		+ '<a href="available_positions.html"><p class="nav_sidebar_item">Available Positions</p></a>'
		+ '</div>';

	document.getElementById('navBar').innerHTML = navBarHTML;
	}

function insertNavBar_info() {
	var navBarHTML = '<div class="nav_sidebar">'
		+ '<a href="research.html"><p class="nav_sidebar_item">Research Interests</p></a>'
		+ '<a href="group_members.html"><p class="nav_sidebar_item">Group Members</p></a>'
		+ '<a href="publications.html"><p class="nav_sidebar_item">Publications</p></a>'
		+ '<a href="group_info.html"><p class="nav_sidebar_item">Group Info</p></a>'
		+ '<a href="group_photos.html"><p class="nav_sidebar_subitem">Group Photos</p></a>'
		+ '<a href="available_positions.html"><p class="nav_sidebar_item">Available Positions</p></a>'
		+ '</div>';

	document.getElementById('navBar').innerHTML = navBarHTML;
	}

function insertNavBar_research() {
	var navBarHTML = '<div class="nav_sidebar">'
		+ '<a href="research.html"><p class="nav_sidebar_item">Research Interests</p></a>'
		+ '<a href="biomaterials.html"><p class="nav_sidebar_subitem">Biomaterials and <br />Biocatalytic Microsystems</p></a>'
		+ '<a href="biocatalyst_engineering.html"><p class="nav_sidebar_subitem">Biocatalyst Engineering</p></a>'
		+ '<a href="extremozymes.html"><p class="nav_sidebar_subitem">Structure and Function of Proteins from Extremophiles</p></a>'
		+ '<a href="extremophiles.html"><p class="nav_sidebar_subitem">Cultivation of Extremophiles</p></a>'
		+ '<a href="biofuels.html"><p class="nav_sidebar_subitem">Enhanced Conversion of Lignocellulose to Biofuels</p></a>'
		+ '<a href="biomedical_plasma.html"><p class="nav_sidebar_subitem">Biomedical Applications of Low Temperature Plasma</p></a>'
		+ '<a href="group_members.html"><p class="nav_sidebar_item">Group Members</p></a>'
		+ '<a href="publications.html"><p class="nav_sidebar_item">Publications</p></a>'
		+ '<a href="group_info.html"><p class="nav_sidebar_item">Group Info</p></a>'
		+ '<a href="available_positions.html"><p class="nav_sidebar_item">Available Positions</p></a>'
		+ '</div>';

	document.getElementById('navBar').innerHTML = navBarHTML;
	}

function insertNavBar_hor() {
	var navBarHTML = '<table width="800" border="0" cellspacing="0" cellpadding="0">'
		+ '<tr height="40">'
		+ '<td colspan="2" height="40"><a href="index.html"><img src="images/ClarkTitle_01.jpg" alt="" width="200" height="40" border="0" /></a></td>'
		+ '<td colspan="3" height="40"><a href="http://cheme.berkeley.edu"><img src="images/ClarkTitle_02.jpg" alt="" width="216" height="40" border="0" /></a></td>'
		+ '<td width="265" height="40"><a href="http://www.berkeley.edu"><img src="images/ClarkTitle_04.jpg" alt="" width="200" height="40" border="0" /></a></td>'
		+ '</tr>'
		+ '<tr height="15">'
		+ '<td align="left" bgcolor="#333333" width="106" height="35"><font  color="white" face="Verdana, Arial, Helvetica, sans-serif"><a href="research.html">&nbsp;Research</a></font></td>'
		+ '<td align="center" valign="middle" bgcolor="#333333" width="138" height="15"><font color="white" face="Verdana, Arial, Helvetica, sans-serif"><a href="group_members.html">Group Members</a></font></td>'
		+ '<td align="center" valign="middle" bgcolor="#333333" width="149" height="15"><a href="publications.html"><font face="Verdana, Arial, Helvetica, sans-serif">Publications</font></a></td>'
		+ '<td align="left" valign="middle" bgcolor="#333333" width="141" height="15"><font color="white" face="Verdana, Arial, Helvetica, sans-serif"><a href="group_info.html">&nbsp;&nbsp;Group Info</a></font></td>'
		+ '<td align="left" valign="middle" colspan="2" bgcolor="#333333" height="15"><font color="white" face="Verdana, Arial, Helvetica, sans-serif"><a href="available_positions.html">&nbsp;Available Positions</a></font></td>'
		+ '</tr>'
		+ '<tr><td colspan="8"><img id="baseimage1" src="images/HomePage01.jpg" alt="" name="baseimage1" width="800" height="545" border="0" /></td></tr>'
		+ '</table>';

	document.getElementById('navBar').innerHTML = navBarHTML;
	}


// Site Banner Construction

function insertBanner() {

	var pageName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
	
	var bannerColors = {};
	bannerColors['group_photos.html'] = '#CF6F00';
	bannerColors['biofuels.html'] = '#f45900';
	bannerColors['biocatalyst_engineering.html'] = '#cc0000';
	bannerColors['biomaterials.html'] = '#8398C';
	bannerColors['extremophiles.html'] = '#cc0000';
	bannerColors['extremozymes.html'] = '#fe6811';
	bannerColors['available_positions.html'] = '#ff6A22';
	bannerColors['biomedical_plasma.html'] = '#BE81F7';
	bannerColors['group_info.html'] = '#FFFF0E';
	bannerColors['group_members.html'] = '#3a4595';
	bannerColors['research.html'] = '#63C814';
	bannerColors['publications.html'] = '#4C5BB8';
	bannerColors['test.html'] = '#4C5BB8';
	//bannerColors['.html'] = '#';

	var bannerImages = {};
	bannerImages['group_photos.html'] = 'images/Banner15.jpg';
	bannerImages['biofuels.html'] = 'images/Banner03.jpg';
	bannerImages['biocatalyst_engineering.html'] = 'images/Banner02.jpg';
	bannerImages['biomaterials.html'] = 'images/Banner12.jpg';
	bannerImages['extremophiles.html'] = 'images/Banner10.jpg';
	bannerImages['extremozymes.html'] = 'images/Benner04.jpg';
	bannerImages['available_positions.html'] = 'images/SkylineBanner.jpg';
	bannerImages['biomedical_plasma.html'] = 'images/plasmabanner.jpg';
	bannerImages['group_info.html'] = 'images/Banner07.jpg';
	bannerImages['group_members.html'] = 'images/Banner08.jpg';
	bannerImages['research.html'] = 'images/Banner01.jpg';
	bannerImages['publications.html'] = 'images/BannerPub.jpg';
	bannerImages['test.html'] = 'images/BannerPub.jpg';	
	//bannerImages['.html'] = '#';

	var bannerHTML = '<table width="800" border="0" cellspacing="0" cellpadding="0">'
		+ '<tr>'
		+ '<td colspan="3"><a title="Home" href="index.html"><img src="images/ClarkTitle_01.jpg" alt="" width="200" height="40" border="0" /></a></td>'
		+ '<td height="40" colspan="2"><div align="left"><a href="http://cheme.berkeley.edu"><img src="images/ClarkTitle_02.jpg" alt="" width="216" height="40" border="0" /></a></div></td>'
		+ '<td colspan="2"><a href="http://www.berkeley.edu"><img src="images/ClarkTitle_04.jpg" alt="" width="200" height="40" border="0" /></a></td>'
		+ '</tr>'
		+ '<tr height="15">'
		+ '<td id="bannerColor" colspan="7" bgcolor="' + bannerColors[pageName] + '" height="15"></td>'
		+ '</tr>'
		+ '<tr>'
		+ '<td colspan="7"><img id="bannerImage" src="' + bannerImages[pageName] + '" alt="" width="800" height="215" border="0" /></td>'
		+ '</tr>'
		+ '<tr height="15">'
		+ '<td width="200" colspan="3" bgcolor="#333333" height="15"></td>'
		+ '<td width="415" height="15" colspan="3" bgcolor="#e6e6e6"></td>'
		+ '<td id="bannerColor" width="185" height="15" bgcolor="' + bannerColors[pageName] + '"></td>'
		+ '</tr>';

	document.getElementById('banner').innerHTML = bannerHTML;

	// set the banner color
	//document.getElementById('bannerColor').bgcolor = bannerColors[pageName];

	// set the banner image
	//document.getElementById('bannerImage').src=bannerImages[pageName];

	}

// Add JavaScript to automatically resize iframes based on content size:

function injectIframe(obj) {
	var scriptTag = "<script src='javascript/iframeResizer.contentWindow.min.js'><\/script>";
	obj.contents().find("body").append(scriptTag);
	}



