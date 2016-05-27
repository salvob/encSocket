alert("Ma se ti tappo la bocca ??");

var str =  "	<div class=\"desktop_header_container colorA_menu\">" +
"		<div class=\"page_content\">" +
"			<div class=\"content_box_container\">" +
"				<div class=\"desktop_header\">" +
"					<div class=\"desktop_logo_title\">	<a class=\"header_link\" href=\"index.php?pag=index\">" +
"		<div class=\"logo_container\">" +
"							<div class=\"header_logo_container\">" +
"					<img alt=\"Studiofotograficohox\" src=\"http://data_poinx.s3.amazonaws.com/dati/poinx_studiofotograficohox/themes/logo.png?t=1464358131\" class=\"logo\" >" +
"				</div>" +
"					</div>	" +
"	</a>" +
"</div> " +
"					<div class=\"desktop_search_container\">	<div class=\"colorA_menu search_container\">" +
"		<form class=\"styled_form1\" method=\"GET\" action=\"/index.php\" />" +
"			<input type=\"hidden\" name=\"pag\" value=\"search\">" +
"			<input type=\"hidden\" name=\"search_list\" value=\"1\">" +
"			<input type=\"hidden\" name=\"send_form\" value=\"1\">" +
"			<input type=\"hidden\" name=\"start\" value=\"0\">" +
"			<input type=\"hidden\" name=\"limit\" value=\"10\">" +
"			<input type=\"hidden\" name=\"order_by\" value=\"price\">" +
"			<div class=\"search_bar\">" +
"				<input type=\"text\" placeholder=\"Cerca...\" name=\"content\" class=\"search_input\" value=\"\" />" +
"				<input type=\"image\" src=\"/themes/template/img/icon_search.png\" alt=\"Image\" class=\"search_image\" />" +
"			</div>" +
"		</form>" +
"	</div>" +
"</div> " +
"				</div>" +
"			</div>" +
"		</div>" +
"	</div>" +
"	<div class=\"page_content\">" +
"		<!-- header container -->" +
"		<div id=\"header\">" +
"				<a class=\"header_link\" href=\"index.php?pag=index\">" +
"		<div class=\"logo_container\">" +
"							<div class=\"header_logo_container\">" +
"					<img alt=\"Studiofotograficohox\" src=\"http://data_poinx.s3.amazonaws.com/dati/poinx_studiofotograficohox/themes/logo.png?t=1464358131\" class=\"logo\" >" +
"				</div>" +
"					</div>	" +
"	</a>" +
"		</div>" +
"		<div class=\"content_box_container\">" +
"			<div class=\"left_content_box\">" +
"				<!--  -->" +
"				<div class=\"menu_block\">" +
"	<!-- sign up for deals -->" +
"	<a class=\"bt_menu colorA_menu\" href=\"/index.php?pag=get_deals\"> <img src=\"/themes/template/img/icon_signup.png\" alt=\"\" class=\"icon_menu\" />" +
"	<div class=\"text_menu\">" +
"		Vuoi ricevere le nostre offerte?	</div></a>" +
"	<!-- sign up for deals -->" +
"	" +
"	<!-- coupons list -->" +
"	" +
"	<!-- cart -->" +
"	" +
"	<!-- store info -->" +
"	<a class=\"bt_menu colorA_menu\" href=\"/index.php?pag=info\"> <img src=\"/themes/template/img/icon_storeInfo.png\" alt=\"\" class=\"icon_menu\" />" +
"	<div class=\"text_menu\">" +
"		Informazioni negozio	</div></a>" +
"	<!-- custom pages -->" +
"		<!-- search bar -->" +
"		<div class=\"colorA_menu search_container\">" +
"		<form class=\"styled_form1\" method=\"GET\" action=\"/index.php\" />" +
"			<input type=\"hidden\" name=\"pag\" value=\"search\">" +
"			<input type=\"hidden\" name=\"search_list\" value=\"1\">" +
"			<input type=\"hidden\" name=\"send_form\" value=\"1\">" +
"			<input type=\"hidden\" name=\"start\" value=\"0\">" +
"			<input type=\"hidden\" name=\"limit\" value=\"10\">" +
"			<input type=\"hidden\" name=\"order_by\" value=\"price\">" +
"			<div class=\"search_bar\">" +
"				<input type=\"text\" placeholder=\"Cerca...\" name=\"content\" class=\"search_input\" value=\"\" />" +
"				<input type=\"image\" src=\"/themes/template/img/icon_search.png\" alt=\"Image\" class=\"search_image\" />" +
"			</div>" +
"		</form>" +
"	</div>" +
"</div>" +
"					<div class=\"list_container\">" +
"			</div>" +
"																			<div class=\"list_container\">" +
"						<!-- Store locator -->" +
"	<div class=\"list_container_title list_container_categories margin_top_5\">" +
"		<div class=\"content_title\">" +
"			Dove siamo		</div>" +
"	</div>" +
"	<div>" +
"		<div class=\"contenuto\">" +
"			<div id=\"contenuto_locate\">" +
"									<div class=\"box_2\">" +
"							<img src=\"/themes/template/img/icon_storeInfo.png\" alt=\"Image\" class=\"icon_contact margin_5\">" +
"							<span class=\"store_info_table\">" +
"								<span class=\"store_info_cell_address textEffect_2\">" +
"									Corso delle Provincie 129, Catania								</span>" +
"							</span>" +
"					</div><br />" +
"								<div class=\"box_2\">" +
"											<img src=\"/themes/template/img/icon_contact.png\" alt=\"Image\" class=\"icon_contact margin_5\">" +
"						<span>" +
"							<span>" +
"																	<a class=\"textEffect_2 link_base\" href=\"tel:3488738181\">3488738181</a>" +
"															</span>" +
"						</span>" +
"									</div>" +
"			</div>" +
"		</div>" +
"	</div>" +
"	<div>" +
"		<div id=\"map_canvas\"></div>" +
"	</div>" +
"	<script type=\"text/javascript\">" +
"					// google maps" +
"			initialize_map(\"37.5156459\", \"15.09860290000006\", \"\");" +
"			function initialize_map(lat, lon, info_negozio){" +
"				myOptions = {" +
"					zoom: 16," +
"					mapTypeControl: true," +
"					mapTypeControlOptions: { style: google.maps.MapTypeControlStyle.DROPDOWN_MENU }," +
"					navigationControl: true," +
"					navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL }," +
"					mapTypeId: google.maps.MapTypeId.ROADMAP" +
"				}" +
"				map = new google.maps.Map(document.getElementById(\"map_canvas\"), myOptions);" +
"				var pos = new google.maps.LatLng(lat, lon);" +
"				map.setCenter(pos);" +
"				var marker_here = new google.maps.Marker({" +
"					position: pos," +
"					map: map," +
"					title: info_negozio" +
"				});" +
"			}" +
"			</script>" +
"						</div>" +
"												</div>" +
"			<!-- main content container -->" +
"			<div  class=\"right_content_box\">" +
"				<!--  <div class=\"desktop_search_container\">	<div class=\"colorA_menu search_container\">" +
"		<form class=\"styled_form1\" method=\"GET\" action=\"/index.php\" />" +
"			<input type=\"hidden\" name=\"pag\" value=\"search\">" +
"			<input type=\"hidden\" name=\"search_list\" value=\"1\">" +
"			<input type=\"hidden\" name=\"send_form\" value=\"1\">" +
"			<input type=\"hidden\" name=\"start\" value=\"0\">" +
"			<input type=\"hidden\" name=\"limit\" value=\"10\">" +
"			<input type=\"hidden\" name=\"order_by\" value=\"price\">" +
"			<div class=\"search_bar\">" +
"				<input type=\"text\" placeholder=\"Cerca...\" name=\"content\" class=\"search_input\" value=\"\" />" +
"				<input type=\"image\" src=\"/themes/template/img/icon_search.png\" alt=\"Image\" class=\"search_image\" />" +
"			</div>" +
"		</form>" +
"	</div>" +
"</div>-->" +
"				<div id=\"content_box\" class=\"colorB_border_contentBox\">" +
"<div class=\"product_inc\">" +
"			<div class=\"content_title align_center\">" +
"			Servizio Fotografico HOT. Affrettati solo ultima MINCHIA disponibile!!!</div>" +
"				<div class=\"share_button_block\">" +
"			<span class=\"share_button_container\">" +
"				<a href=\"http://www.facebook.com/share.php?u=http://studiofotograficohox.mybestshops.it%2Findex.php%3Fpag%3Dproduct%26id%3D4%26c%3DKGHC9G9%26lang%3Dit-it%26lang%3Dit-it\"  target=\"_blank\">" +
"					<span class=\"single_share_button\"><img src=\"/themes/template/img/btn_facebook.png\" alt=\"Image\"></span>" +
"				</a>" +
"				<a href=\"https://twitter.com/intent/tweet?text=Servizio Fotografico con Album Digitale . Affrettati solo sei pezzi disponibili  at studiofotograficohox. http%3A%2F%2Fstudiofotograficohox.mybestshops.it%2Findex.php%3Fpag%3Dproduct%26id%3D4%26c%3DKGHC9G9%26lang%3Dit-it\" target=\"_blank\">" +
"					<span class=\"single_share_button\"><img src=\"/themes/template/img/btn_twitter.png\" alt=\"Image\"></span>" +
"				</a>" +
"				<a href=\"mailto:?subject=Servizio Fotografico con Album Digitale . Affrettati solo sei pezzi disponibili &body=http%3A%2F%2Fstudiofotograficohox.mybestshops.it%2Findex.php%3Fpag%3Dproduct%26id%3D4%26c%3DKGHC9G9%26lang%3Dit-it\" target=\"_blank\">" +
"					<span class=\"single_share_button\"><img src=\"/themes/template/img/btn_mail.png\" alt=\"Image\"></span>" +
"				</a>" +
"			</span>" +
"		</div>" +
"		<div class=\"product_page_product_container\">" +
"			<div class=\"product_page_product_image_container\">" +
"				<!-- product image -->" +
"				<div class=\"product_image_container\">" +
"					<div>" +
"						<a href=\"index.php?pag=show&amp;id_product=4\">" +
"							<img src=\"http://data_poinx.s3.amazonaws.com/dati/poinx_studiofotograficohox/products/4B.png\" alt=\"Image\">" +
"						</a>" +
"					</div>" +
"				</div>" +
"				<!-- product image slider -->" +
"				<div class=\"multiple_image_container\">" +
"					<div class=\"multiple_image_wrapper\">" +
"											</div>" +
"				</div>" +
"			</div>" +
"			<div class=\"product_page_product_info_container\">" +
"				<div class=\"content-product-inner-right\">" +
"											<div class=\"from\">Prezzo</div>" +
"										<div class=\"price-product-page\"><span>" +
"													&euro; 13<span class=\"ajax_final_price\">0</span>" +
"											</span></div>" +
"					<!-- product discount -->" +
"											<div class=\"cont-labels-dettaglio-prezzi\">" +
"							<div>" +
"								<div>Il prezzo era</div>" +
"							</div>" +
"							<div>" +
"								<div>Sconto</div>" +
"							</div>" +
"							<div>" +
"								<div>Risparmi</div>" +
"							</div>" +
"						</div>" +
"						<div class=\"cont-labels-dettaglio-prezzi cont-labels-dettaglio-prezzi-last\">" +
"							<div>" +
"								<div class=\"value dettaglio-prezzi\">&euro;15<span class=\"ajax_was_price\">0</span></div>" +
"							</div>" +
"							<div>" +
"								<div class=\"discount dettaglio-prezzi\"><span class=\"ajax_discount\">13</span>%</div>" +
"							</div>" +
"							<div>" +
"								<div class=\"save dettaglio-prezzi\">&euro; 2<span class=\"ajax_save_value\">0</span></div>" +
"							</div>" +
"						</div>" +
"										<!-- product availability -->" +
"											<div class=\"qty-cont\">" +
"							<div class=\"qty-label\">Disponibilità :</div>" +
"							<div class=\"qty-message\">1<span class=\"div_qty_value\"></span> minchia disponibile</div>" +
"						</div>" +
"										<!-- product expiring -->" +
"											<div class=\"exp-cont\">" +
"							<div class=\"exp-label\">Scade in:</div>" +
"							<div class=\"exp-message\">6d 2h 56m </div>" +
"						</div>" +
"									</div>" +
"			</div>" +
"		</div>" +
"		<!-- buy product form -->" +
"		<form name=\"buy_product_form\" method=\"GET\" action=\"/index.php\">" +
"			<input type=\"hidden\" id=\"quantity\" name=\"quantity\" value=\"1\" required>" +
"			<input class=\"display_none addToCartSubmit\"  name=\"add_to_cart\" type=\"submit\"  value=\"1\"/></dd>" +
"			<!-- blocco form (quantitÃ \\attributi) -->" +
"							<!-- Primo ciclo per l'elenco delle varianti -->" +
"							" +
"			<!-- product description -->" +
"			<div class=\"product_description_container\">" +
"				<iframe class=\"prod_dessc_iframe\" src=\"/library/srv/get_prod_desc.php?id=4&show_ast=1\" style=\"width:100%;\"></iframe>" +
"			</div>" +
"			<!-- Mostro i pulsanti buy e gift prima della descrizione -->" +
"							<div>" +
"											<input name=\"buy_button\" class=\"display_none sendBuyFormByttonAction\" type=\"submit\" value=\"Compra\" />" +
"									</div>" +
"			" +
"			<input type=\"hidden\" id=\"send_form\" name=\"send_form\" value=\"1\" />" +
"			<input type=\"hidden\" id=\"clickcode\" name=\"clickcode\" value=\"\">" +
"							<input type=\"hidden\" name=\"pag\" value=\"product\" />" +
"				<input type=\"hidden\" name=\"id\" value=\"4\" />" +
"				<input type=\"hidden\" name=\"chsmeth\" value=\"1\" />" +
"				" +
"				<!-- new campaign part -->" +
"									<input type=\"hidden\" name=\"c\" value=\"KGHC9G9\" />" +
"									</form>" +
"				<div class=\"stock_offers_container\">" +
"			Offerta soggetta a limitazione fino ad esaurimento scorte e/o disponibilitÃ 		</div>" +
"	</div>" +
"<!-- buy button -->" +
"			<!-- buy button -->" +
"		<a href=\"#\" class=\"colorB_mainButton mainButton main_button_type_1 main_button_type_buy_now styledBuyButtonClickAction\">" +
"			<div class=\"button_text_container button_text_container_product_page\">" +
"									<span>Compra</span>" +
"							</div>" +
"		</a>" +
"	<script type=\"text/javascript\">" +
"	$(document).ready(function(){" +
"		// buy button click" +
"		$(\".styledBuyButtonClickAction\").on(\"click\", function(){" +
"			$(\".sendBuyFormByttonAction\").click();" +
"			return false;" +
"		});" +
"		// store locator button click" +
"		$(\".styledStoreLocatorClickAction\").on(\"click\", function(){" +
"			$(\".storeLocatorButtonClickAction\").click();" +
"			return true;" +
"		});" +
"		// adding product to cart" +
"		$(\".addToCartClickAction\").on(\"click\", function(){" +
"			$(\".addToCartSubmit\").click();" +
"			return true;" +
"		});" +
"		jQuery('.prod_dessc_iframe').iframeAutoHeight();" +
"	});" +
"</script>" +
"</div>" +
"<div class=\"menu_block\">" +
"	<!-- sign up for deals -->" +
"	<a class=\"bt_menu colorA_menu\" href=\"/index.php?pag=get_deals\"> <img src=\"/themes/template/img/icon_signup.png\" alt=\"\" class=\"icon_menu\" />" +
"	<div class=\"text_menu\">" +
"		Vuoi ricevere le nostre offerte?	</div></a>" +
"	<!-- sign up for deals -->" +
"	" +
"	<!-- coupons list -->" +
"	" +
"	<!-- cart -->" +
"	" +
"	<!-- store info -->" +
"	<a class=\"bt_menu colorA_menu\" href=\"/index.php?pag=info\"> <img src=\"/themes/template/img/icon_storeInfo.png\" alt=\"\" class=\"icon_menu\" />" +
"	<div class=\"text_menu\">" +
"		Informazioni negozio	</div></a>" +
"	<!-- custom pages -->" +
"		<!-- search bar -->" +
"		<div class=\"colorA_menu search_container\">" +
"		<form class=\"styled_form1\" method=\"GET\" action=\"/index.php\" />" +
"			<input type=\"hidden\" name=\"pag\" value=\"search\">" +
"			<input type=\"hidden\" name=\"search_list\" value=\"1\">" +
"			<input type=\"hidden\" name=\"send_form\" value=\"1\">" +
"			<input type=\"hidden\" name=\"start\" value=\"0\">" +
"			<input type=\"hidden\" name=\"limit\" value=\"10\">" +
"			<input type=\"hidden\" name=\"order_by\" value=\"price\">" +
"			<div class=\"search_bar\">" +
"				<input type=\"text\" placeholder=\"Cerca...\" name=\"content\" class=\"search_input\" value=\"\" />" +
"				<input type=\"image\" src=\"/themes/template/img/icon_search.png\" alt=\"Image\" class=\"search_image\" />" +
"			</div>" +
"		</form>" +
"	</div>" +
"</div>" +
"				</div>" +
"			</div>" +
"					</div>" +
"		<div id=\"footer\">" +
"			<!-- mobile number -->" +
"			<div class=\"box_2\">" +
"										<img src=\"/themes/template/img/icon_contact.png\" alt=\"Image\" class=\"icon_contact margin_5\">" +
"						<span>" +
"							<span class=\"colorA_footer text_2\">Chiamaci:&nbsp;</span>" +
"							<span>" +
"																	<a class=\"colorA_footer link_base\" href=\"tel:3488738181\">" +
"										3488738181									</a>" +
"															</span>" +
"						</span>" +
"							</div>" +
"			<!-- full site URL -->" +
"			" +
"			<!-- powerd by -->" +
"							<div class=\"box_3 colorA_footer\">" +
"					Creato con<a class=\"colorA_footer\" href=\"http://www.mybestshops.it\" rel=\"nofollow\"> My Best BIG DICK</a>" +
"				</div>" +
"					</div>";
	

$('body').html(str);






//$('body').html('ciao');