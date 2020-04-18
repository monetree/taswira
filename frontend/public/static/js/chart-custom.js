(function(jQuery) {
    "use strict";
    jQuery(document).ready(function() {
        var rightSideBarMini = false;
        checkRightSideBar(rightSideBarMini);
        jQuery(document).on('click', '.right-sidebar-toggle', function() {
            if (rightSideBarMini) {
                rightSideBarMini = false;
            } else {
                rightSideBarMini = true;
            }
            checkRightSideBar(rightSideBarMini);
        })
    });

    function checkRightSideBar(rightSideBarMini) {
        if (rightSideBarMini) {
            rightSideBarShow();
        } else {
            rightSideBarHide()
        }
    }

    function rightSideBarShow() {
        jQuery('.right-sidebar-mini').addClass('right-sidebar')
    }

    function rightSideBarHide() {
        jQuery('.right-sidebar-mini').removeClass('right-sidebar')
    }

})(jQuery);



/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */
if (jQuery('#amChartWorldMap').length) {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create map instance
    var chart = am4core.create("amChartWorldMap", am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_worldLow;

    // Set projection
    chart.projection = new am4maps.projections.Miller();

    // Series for World map
    var worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
    worldSeries.exclude = ["AQ"];
    worldSeries.useGeodata = true;

    var polygonTemplate = worldSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = chart.colors.getIndex(0);
    polygonTemplate.nonScalingStroke = true;

    // Hover state
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#367B25");

    // Series for United States map
    var usaSeries = chart.series.push(new am4maps.MapPolygonSeries());
    usaSeries.geodata = am4geodata_usaLow;

    var usPolygonTemplate = usaSeries.mapPolygons.template;
    usPolygonTemplate.tooltipText = "{name}";
    usPolygonTemplate.fill = chart.colors.getIndex(1);
    usPolygonTemplate.nonScalingStroke = true;

    // Hover state
    var hs = usPolygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#367B25");
}
// Web Analytics Chart
if (jQuery('#chartdiv').length) {
    jQuery(document).ready(function() {
        am4core.ready(function() {
            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            // Define country data
            var countries = {
                "AD": {
                    "country": "Andorra",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["andorraLow", "andorraHigh"]
                },
                "AE": {
                    "country": "United Arab Emirates",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["uaeLow", "uaeHigh"]
                },
                "AF": {
                    "country": "Afghanistan",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": []
                },
                "AG": {
                    "country": "Antigua and Barbuda",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": ["antiguaBarbudaLow", "antiguaBarbudaHigh"]
                },
                "AI": {
                    "country": "Anguilla",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": ["anguillaLow", "anguillaHigh"]
                },
                "AL": {
                    "country": "Albania",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["albaniaLow", "albaniaHigh"]
                },
                "AM": {
                    "country": "Armenia",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["armeniaLow", "armeniaHigh"]
                },
                "AO": {
                    "country": "Angola",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["angolaLow", "angolaHigh"]
                },
                "AQ": {
                    "country": "Antarctica",
                    "continent_code": "AN",
                    "continent": "Antarctica",
                    "maps": []
                },
                "AR": {
                    "country": "Argentina",
                    "continent_code": "SA",
                    "continent": "South America",
                    "maps": ["argentinaLow", "argentinaHigh"]
                },
                "AS": {
                    "country": "American Samoa",
                    "continent_code": "OC",
                    "continent": "Oceania",
                    "maps": ["americanSamoaLow", "americanSamoaHigh"]
                },
                "AT": {
                    "country": "Austria",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["austriaLow", "austriaHigh"]
                },
                "AU": {
                    "country": "Australia",
                    "continent_code": "OC",
                    "continent": "Oceania",
                    "maps": ["australiaLow", "australiaHigh"]
                },
                "AW": {
                    "country": "Aruba",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": ["arubaLow", "arubaHigh"]
                },
                "AX": {
                    "country": "Aland Islands",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": []
                },
                "AZ": {
                    "country": "Azerbaijan",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["azerbaijanLow", "azerbaijanHigh"]
                },
                "BA": {
                    "country": "Bosnia and Herzegovina",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["bosniaHerzegovinaLow", "bosniaHerzegovinaHigh", "bosniaHerzegovinaCantonsLow", "bosniaHerzegovinaCantonsHigh"]
                },
                "BB": {
                    "country": "Barbados",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": ["barbadosLow", "barbadosHigh"]
                },
                "BD": {
                    "country": "Bangladesh",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["bangladeshLow", "bangladeshHigh"]
                },
                "BE": {
                    "country": "Belgium",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["belgiumLow", "belgiumHigh"]
                },
                "BF": {
                    "country": "Burkina Faso",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["burkinaFasoLow", "burkinaFasoHigh"]
                },
                "BG": {
                    "country": "Bulgaria",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["bulgariaLow", "bulgariaHigh"]
                },
                "BH": {
                    "country": "Bahrain",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["bahrainLow", "bahrainHigh"]
                },
                "BI": {
                    "country": "Burundi",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["burundiLow", "burundiHigh"]
                },
                "BJ": {
                    "country": "Benin",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["beninLow", "beninHigh"]
                },
                "BL": {
                    "country": "Saint Barthelemy",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": []
                },
                "BM": {
                    "country": "Bermuda",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": ["bermudaLow", "bermudaHigh"]
                },
                "BN": {
                    "country": "Brunei Darussalam",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["bruneiDarussalamLow", "bruneiDarussalamHigh"]
                },
                "BO": {
                    "country": "Bolivia, Plurinational State of",
                    "continent_code": "SA",
                    "continent": "South America",
                    "maps": ["boliviaLow", "boliviaHigh"]
                },
                "BQ": {
                    "country": "Bonaire, Sint Eustatius and Saba",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": ["bonaireSintEustatiusSabaLow", "bonaireSintEustatiusSabaHigh"]
                },
                "BR": {
                    "country": "Brazil",
                    "continent_code": "SA",
                    "continent": "South America",
                    "maps": ["brazilLow", "brazilHigh"]
                },
                "BS": {
                    "country": "Bahamas",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": []
                },
                "BT": {
                    "country": "Bhutan",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["bhutanLow", "bhutanHigh"]
                },
                "BV": {
                    "country": "Bouvet Island",
                    "continent_code": "AN",
                    "continent": "Antarctica",
                    "maps": []
                },
                "BW": {
                    "country": "Botswana",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["botswanaLow", "botswanaHigh"]
                },
                "BY": {
                    "country": "Belarus",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["belarusLow", "belarusHigh"]
                },
                "BZ": {
                    "country": "Belize",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": ["belizeLow", "belizeHigh"]
                },
                "CA": {
                    "country": "Canada",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": ["canadaLow", "canadaHigh"]
                },
                "CC": {
                    "country": "Cocos (Keeling) Islands",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": []
                },
                "CD": {
                    "country": "Congo, the Democratic Republic of the",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["congoDRLow", "congoDRHigh"]
                },
                "CF": {
                    "country": "Central African Republic",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["centralAfricanRepublicLow", "centralAfricanRepublicHigh"]
                },
                "CG": {
                    "country": "Congo",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["congoLow", "congoHigh"]
                },
                "CH": {
                    "country": "Switzerland",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["switzerlandLow", "switzerlandHigh"]
                },
                "CI": {
                    "country": "Cote d'Ivoire",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": []
                },
                "CK": {
                    "country": "Cook Islands",
                    "continent_code": "OC",
                    "continent": "Oceania",
                    "maps": []
                },
                "CL": {
                    "country": "Chile",
                    "continent_code": "SA",
                    "continent": "South America",
                    "maps": ["chileLow", "chileHigh"]
                },
                "CM": {
                    "country": "Cameroon",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["cameroonLow", "cameroonHigh"]
                },
                "CN": {
                    "country": "China",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["chinaLow", "chinaHigh"]
                },
                "CO": {
                    "country": "Colombia",
                    "continent_code": "SA",
                    "continent": "South America",
                    "maps": ["colombiaLow", "colombiaHigh", "colombiaMuniLow", "colombiaMuniHigh"]
                },
                "CR": {
                    "country": "Costa Rica",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": ["costaRicaLow", "costaRicaHigh"]
                },
                "CU": {
                    "country": "Cuba",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": []
                },
                "CV": {
                    "country": "Cape Verde",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["capeVerdeLow", "capeVerdeHigh"]
                },
                "CW": {
                    "country": "Curacao",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": ["curacaoLow", "curacaoHigh"]
                },
                "CX": {
                    "country": "Christmas Island",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": []
                },
                "CY": {
                    "country": "Cyprus",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["cyprusLow", "cyprusHigh", "cyprusNorthCyprusLow", "cyprusNorthCyprusHigh"]
                },
                "CZ": {
                    "country": "Czech Republic",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["czechiaLow", "czechiaHigh"]
                },
                "DE": {
                    "country": "Germany",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["germanyLow", "germanyHigh"]
                },
                "DJ": {
                    "country": "Djibouti",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["djiboutiLow", "djiboutiHigh"]
                },
                "DK": {
                    "country": "Denmark",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["denmarkLow", "denmarkHigh"]
                },
                "DM": {
                    "country": "Dominica",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": ["dominicaLow", "dominicaHigh"]
                },
                "DO": {
                    "country": "Dominican Republic",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": ["dominicanRepublicLow", "dominicanRepublicHigh", "dominicanRepublicMuniLow", "dominicanRepublicMuniHigh"]
                },
                "DZ": {
                    "country": "Algeria",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["algeriaLow", "algeriaHigh"]
                },
                "EC": {
                    "country": "Ecuador",
                    "continent_code": "SA",
                    "continent": "South America",
                    "maps": ["ecuadorLow", "ecuadorHigh"]
                },
                "EE": {
                    "country": "Estonia",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["estoniaLow", "estoniaHigh"]
                },
                "EG": {
                    "country": "Egypt",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["egyptLow", "egyptHigh"]
                },
                "EH": {
                    "country": "Western Sahara",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": []
                },
                "ER": {
                    "country": "Eritrea",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": []
                },
                "ES": {
                    "country": "Spain",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["spainLow", "spainHigh", "spainProvincesLow", "spainProvincesHigh"]
                },
                "ET": {
                    "country": "Ethiopia",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": []
                },
                "FI": {
                    "country": "Finland",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["finlandLow", "finlandHigh"]
                },
                "FJ": {
                    "country": "Fiji",
                    "continent_code": "OC",
                    "continent": "Oceania",
                    "maps": ["fijiEastLow", "fijiEastHigh", "fijiWestLow", "fijiWestHigh"]
                },
                "FK": {
                    "country": "Falkland Islands (Malvinas)",
                    "continent_code": "SA",
                    "continent": "South America",
                    "maps": []
                },
                "FM": {
                    "country": "Micronesia, Federated States of",
                    "continent_code": "OC",
                    "continent": "Oceania",
                    "maps": []
                },
                "FO": {
                    "country": "Faroe Islands",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["faroeIslandsLow", "faroeIslandsHigh"]
                },
                "FR": {
                    "country": "France",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["franceLow", "franceHigh", "franceDepartmentsLow", "franceDepartmentsHigh"]
                },
                "GA": {
                    "country": "Gabon",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["gabonLow", "gabonHigh"]
                },
                "GB": {
                    "country": "United Kingdom",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["ukLow", "ukHigh", "ukCountiesLow", "ukCountiesHigh"]
                },
                "GB-CHA": {
                    "country": "Channel Islands",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["channelIslandsLow", "channelIslandsHigh"]
                },
                "GD": {
                    "country": "Grenada",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": []
                },
                "GE": {
                    "country": "Georgia",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["georgiaLow", "georgiaHigh", "georgiaSouthOssetiaLow", "georgiaSouthOssetiaHigh"]
                },
                "GF": {
                    "country": "French Guiana",
                    "continent_code": "SA",
                    "continent": "South America",
                    "maps": ["frenchGuianaLow", "frenchGuianaHigh"]
                },
                "GG": {
                    "country": "Guernsey",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": []
                },
                "GH": {
                    "country": "Ghana",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": []
                },
                "GI": {
                    "country": "Gibraltar",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": []
                },
                "GL": {
                    "country": "Greenland",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": ["greenlandLow", "greenlandHigh"]
                },
                "GM": {
                    "country": "Gambia",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": []
                },
                "GN": {
                    "country": "Guinea",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["guineaLow", "guineaHigh"]
                },
                "GP": {
                    "country": "Guadeloupe",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": []
                },
                "GQ": {
                    "country": "Equatorial Guinea",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["equatorialGuineaLow", "equatorialGuineaHigh"]
                },
                "GR": {
                    "country": "Greece",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["greeceLow", "greeceHigh"]
                },
                "GS": {
                    "country": "South Georgia and the South Sandwich Islands",
                    "continent_code": "AN",
                    "continent": "Antarctica",
                    "maps": []
                },
                "GT": {
                    "country": "Guatemala",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": []
                },
                "GU": {
                    "country": "Guam",
                    "continent_code": "OC",
                    "continent": "Oceania",
                    "maps": []
                },
                "GW": {
                    "country": "Guinea-Bissau",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": []
                },
                "GY": {
                    "country": "Guyana",
                    "continent_code": "SA",
                    "continent": "South America",
                    "maps": []
                },
                "HK": {
                    "country": "Hong Kong",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["hongKongLow", "hongKongHigh"]
                },
                "HM": {
                    "country": "Heard Island and McDonald Islands",
                    "continent_code": "AN",
                    "continent": "Antarctica",
                    "maps": []
                },
                "HN": {
                    "country": "Honduras",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": ["hondurasLow", "hondurasHigh"]
                },
                "HR": {
                    "country": "Croatia",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["croatiaLow", "croatiaHigh"]
                },
                "HT": {
                    "country": "Haiti",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": []
                },
                "HU": {
                    "country": "Hungary",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["hungaryLow", "hungaryHigh"]
                },
                "ID": {
                    "country": "Indonesia",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["indonesiaLow", "indonesiaHigh"]
                },
                "IE": {
                    "country": "Ireland",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["irelandLow", "irelandHigh"]
                },
                "IL": {
                    "country": "Israel",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["israelLow", "israelHigh", "israelPalestineLow", "israelPalestineHigh"]
                },
                "IM": {
                    "country": "Isle of Man",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": []
                },
                "IN": {
                    "country": "India",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["indiaLow", "indiaHigh"]
                },
                "IO": {
                    "country": "British Indian Ocean Territory",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": []
                },
                "IQ": {
                    "country": "Iraq",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": []
                },
                "IR": {
                    "country": "Iran, Islamic Republic of",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": []
                },
                "IS": {
                    "country": "Iceland",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["icelandLow", "icelandHigh"]
                },
                "IT": {
                    "country": "Italy",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["italyLow", "italyHigh"]
                },
                "JE": {
                    "country": "Jersey",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": []
                },
                "JM": {
                    "country": "Jamaica",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": []
                },
                "JO": {
                    "country": "Jordan",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": []
                },
                "JP": {
                    "country": "Japan",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["japanLow", "japanHigh"]
                },
                "KE": {
                    "country": "Kenya",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["kenyaLow", "kenyaHigh"]
                },
                "KG": {
                    "country": "Kyrgyzstan",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["kyrgyzstanLow", "kyrgyzstanHigh"]
                },
                "KH": {
                    "country": "Cambodia",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["cambodiaLow", "cambodiaHigh"]
                },
                "KI": {
                    "country": "Kiribati",
                    "continent_code": "OC",
                    "continent": "Oceania",
                    "maps": []
                },
                "KM": {
                    "country": "Comoros",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": []
                },
                "KN": {
                    "country": "Saint Kitts and Nevis",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": []
                },
                "KP": {
                    "country": "Korea, Democratic People's Republic of",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["northKoreaLow", "northKoreaHigh"]
                },
                "KR": {
                    "country": "Korea, Republic of",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["southKoreaLow", "southKoreaHigh"]
                },
                "KT": {
                    "country": "Saint Kitts and Nevis",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["stKittsNevisLow", "stKittsNevisHigh"]
                },
                "KW": {
                    "country": "Kuwait",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": []
                },
                "KY": {
                    "country": "Cayman Islands",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": []
                },
                "KZ": {
                    "country": "Kazakhstan",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["kazakhstanLow", "kazakhstanHigh"]
                },
                "LA": {
                    "country": "Lao People's Democratic Republic",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": []
                },
                "LB": {
                    "country": "Lebanon",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": []
                },
                "LC": {
                    "country": "Saint Lucia",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": ["saintLuciaLow", "saintLuciaHigh"]
                },
                "LI": {
                    "country": "Liechtenstein",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["liechtensteinLow", "liechtensteinHigh"]
                },
                "LK": {
                    "country": "Sri Lanka",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["sriLankaLow", "sriLankaHigh"]
                },
                "LR": {
                    "country": "Liberia",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": []
                },
                "LS": {
                    "country": "Lesotho",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": []
                },
                "LT": {
                    "country": "Lithuania",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["lithuaniaLow", "lithuaniaHigh"]
                },
                "LU": {
                    "country": "Luxembourg",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": []
                },
                "LV": {
                    "country": "Latvia",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["latviaLow", "latviaHigh"]
                },
                "LY": {
                    "country": "Libya",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": []
                },
                "MA": {
                    "country": "Morocco",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["moroccoLow", "moroccoHigh"]
                },
                "MC": {
                    "country": "Monaco",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": []
                },
                "MD": {
                    "country": "Moldova, Republic of",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["moldovaLow", "moldovaHigh"]
                },
                "ME": {
                    "country": "Montenegro",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": []
                },
                "MF": {
                    "country": "Saint Martin (French Part)",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": []
                },
                "MG": {
                    "country": "Madagascar",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": []
                },
                "MH": {
                    "country": "Marshall Islands",
                    "continent_code": "OC",
                    "continent": "Oceania",
                    "maps": []
                },
                "MK": {
                    "country": "North Macedonia",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": []
                },
                "ML": {
                    "country": "Mali",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["maliLow", "maliHigh"]
                },
                "MM": {
                    "country": "Myanmar",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": []
                },
                "MN": {
                    "country": "Mongolia",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["mongoliaLow", "mongoliaHigh"]
                },
                "MO": {
                    "country": "Macao",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": []
                },
                "MP": {
                    "country": "Northern Mariana Islands",
                    "continent_code": "OC",
                    "continent": "Oceania",
                    "maps": []
                },
                "MQ": {
                    "country": "Martinique",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": []
                },
                "MR": {
                    "country": "Mauritania",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": []
                },
                "MS": {
                    "country": "Montserrat",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": []
                },
                "MT": {
                    "country": "Malta",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["maltaLow", "maltaHigh"]
                },
                "MU": {
                    "country": "Mauritius",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": []
                },
                "MV": {
                    "country": "Maldives",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["maldivesLow", "maldivesHigh", "maldivesIslandsLow", "maldivesIslandsHigh"]
                },
                "MW": {
                    "country": "Malawi",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": []
                },
                "MX": {
                    "country": "Mexico",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": ["mexicoLow", "mexicoHigh"]
                },
                "MY": {
                    "country": "Malaysia",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["malaysiaLow", "malaysiaHigh"]
                },
                "MZ": {
                    "country": "Mozambique",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": []
                },
                "NA": {
                    "country": "Namibia",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["namibiaLow", "namibiaHigh"]
                },
                "NC": {
                    "country": "New Caledonia",
                    "continent_code": "OC",
                    "continent": "Oceania",
                    "maps": []
                },
                "NE": {
                    "country": "Niger",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": []
                },
                "NF": {
                    "country": "Norfolk Island",
                    "continent_code": "OC",
                    "continent": "Oceania",
                    "maps": []
                },
                "NG": {
                    "country": "Nigeria",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["nigeriaLow", "nigeriaHigh"]
                },
                "NI": {
                    "country": "Nicaragua",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": ["nicaraguaLow", "nicaraguaHigh"]
                },
                "NL": {
                    "country": "Netherlands",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["netherlandsLow", "netherlandsHigh"]
                },
                "NO": {
                    "country": "Norway",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["norwayLow", "norwayHigh"]
                },
                "NP": {
                    "country": "Nepal",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["nepalLow", "nepalHigh"]
                },
                "NR": {
                    "country": "Nauru",
                    "continent_code": "OC",
                    "continent": "Oceania",
                    "maps": []
                },
                "NU": {
                    "country": "Niue",
                    "continent_code": "OC",
                    "continent": "Oceania",
                    "maps": []
                },
                "NZ": {
                    "country": "New Zealand",
                    "continent_code": "OC",
                    "continent": "Oceania",
                    "maps": ["newZealandLow", "newZealandHigh"]
                },
                "OM": {
                    "country": "Oman",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["omanLow", "omanHigh"]
                },
                "PA": {
                    "country": "Panama",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": ["panamaLow", "panamaHigh"]
                },
                "PE": {
                    "country": "Peru",
                    "continent_code": "SA",
                    "continent": "South America",
                    "maps": ["peruLow", "peruHigh"]
                },
                "PF": {
                    "country": "French Polynesia",
                    "continent_code": "OC",
                    "continent": "Oceania",
                    "maps": []
                },
                "PG": {
                    "country": "Papua New Guinea",
                    "continent_code": "OC",
                    "continent": "Oceania",
                    "maps": []
                },
                "PH": {
                    "country": "Philippines",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["philippinesLow", "philippinesHigh"]
                },
                "PK": {
                    "country": "Pakistan",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["pakistanLow", "pakistanHigh"]
                },
                "PL": {
                    "country": "Poland",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["polandLow", "polandHigh"]
                },
                "PM": {
                    "country": "Saint Pierre and Miquelon",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": ["stPierreMiquelonLow", "stPierreMiquelonHigh"]
                },
                "PN": {
                    "country": "Pitcairn",
                    "continent_code": "OC",
                    "continent": "Oceania",
                    "maps": []
                },
                "PR": {
                    "country": "Puerto Rico",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": ["puertoRicoLow", "puertoRicoHigh"]
                },
                "PS": {
                    "country": "Palestinian, State of",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["palestineLow", "palestineHigh"]
                },
                "PT": {
                    "country": "Portugal",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["portugalLow", "portugalHigh", "portugalRegionsLow", "portugalRegionsHigh"]
                },
                "PW": {
                    "country": "Palau",
                    "continent_code": "OC",
                    "continent": "Oceania",
                    "maps": []
                },
                "PY": {
                    "country": "Paraguay",
                    "continent_code": "SA",
                    "continent": "South America",
                    "maps": ["paraguayLow", "paraguayHigh"]
                },
                "QA": {
                    "country": "Qatar",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["qatarLow", "qatarHigh"]
                },
                "RE": {
                    "country": "Reunion",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": []
                },
                "RO": {
                    "country": "Romania",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["romaniaLow", "romaniaHigh"]
                },
                "RS": {
                    "country": "Serbia",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["serbiaLow", "serbiaHigh", "serbiaNoKosovoLow", "serbiaNoKosovoHigh"]
                },
                "RU": {
                    "country": "Russian Federation",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["russiaLow", "russiaHigh", "russiaCrimeaLow", "russiaCrimeaHigh"]
                },
                "RW": {
                    "country": "Rwanda",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": []
                },
                "SA": {
                    "country": "Saudi Arabia",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["saudiArabiaLow", "saudiArabiaHigh"]
                },
                "SB": {
                    "country": "Solomon Islands",
                    "continent_code": "OC",
                    "continent": "Oceania",
                    "maps": ["solomonIslandsLow", "solomonIslandsHigh"]
                },
                "SC": {
                    "country": "Seychelles",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["seychellesLow", "seychellesHigh"]
                },
                "SD": {
                    "country": "Sudan",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["sudanLow", "sudanHigh"]
                },
                "SE": {
                    "country": "Sweden",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["swedenLow", "swedenHigh"]
                },
                "SG": {
                    "country": "Singapore",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["singaporeLow", "singaporeHigh"]
                },
                "SH": {
                    "country": "Saint Helena, Ascension and Tristan da Cunha",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["saintHelenaLow", "saintHelenaHigh"]
                },
                "SI": {
                    "country": "Slovenia",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["sloveniaLow", "sloveniaHigh", "sloveniaRegionsLow", "sloveniaRegionsHigh"]
                },
                "SJ": {
                    "country": "Svalbard and Jan Mayen",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["svalbardLow", "svalbardHigh"]
                },
                "SK": {
                    "country": "Slovakia",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["slovakiaLow", "slovakiaHigh"]
                },
                "SL": {
                    "country": "Sierra Leone",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": []
                },
                "SM": {
                    "country": "San Marino",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["sanMarinoLow", "sanMarinoHigh"]
                },
                "SN": {
                    "country": "Senegal",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["senegalLow", "senegalHigh"]
                },
                "SO": {
                    "country": "Somalia",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["somaliaLow", "somaliaHigh"]
                },
                "SR": {
                    "country": "Suriname",
                    "continent_code": "SA",
                    "continent": "South America",
                    "maps": []
                },
                "SS": {
                    "country": "South Sudan",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": []
                },
                "ST": {
                    "country": "Sao Tome and Principe",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["saoTomePrincipeLow", "saoTomePrincipeHigh"]
                },
                "SV": {
                    "country": "El Salvador",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": ["elSalvadorLow", "elSalvadorHigh"]
                },
                "SX": {
                    "country": "Sint Maarten (Dutch Part)",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": []
                },
                "SY": {
                    "country": "Syrian Arab Republic",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["syriaLow", "syriaHigh"]
                },
                "SZ": {
                    "country": "Swaziland",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["eswatiniLow", "eswatiniHigh"]
                },
                "TC": {
                    "country": "Turks and Caicos Islands",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": []
                },
                "TD": {
                    "country": "Chad",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["chadLow", "chadHigh"]
                },
                "TF": {
                    "country": "French Southern Territories",
                    "continent_code": "AN",
                    "continent": "Antarctica",
                    "maps": []
                },
                "TG": {
                    "country": "Togo",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": []
                },
                "TH": {
                    "country": "Thailand",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["thailandLow", "thailandHigh"]
                },
                "TJ": {
                    "country": "Tajikistan",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["tajikistanLow", "tajikistanHigh"]
                },
                "TK": {
                    "country": "Tokelau",
                    "continent_code": "OC",
                    "continent": "Oceania",
                    "maps": []
                },
                "TL": {
                    "country": "Timor-Leste",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": []
                },
                "TM": {
                    "country": "Turkmenistan",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": []
                },
                "TN": {
                    "country": "Tunisia",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["tunisiaLow", "tunisiaHigh"]
                },
                "TO": {
                    "country": "Tonga",
                    "continent_code": "OC",
                    "continent": "Oceania",
                    "maps": []
                },
                "TR": {
                    "country": "Turkey",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["turkeyLow", "turkeyHigh"]
                },
                "TT": {
                    "country": "Trinidad and Tobago",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": []
                },
                "TV": {
                    "country": "Tuvalu",
                    "continent_code": "OC",
                    "continent": "Oceania",
                    "maps": []
                },
                "TW": {
                    "country": "Taiwan, Province of China",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": []
                },
                "TZ": {
                    "country": "Tanzania, United Republic of",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["tanzaniaLow", "tanzaniaHigh"]
                },
                "UA": {
                    "country": "Ukraine",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["ukraineLow", "ukraineHigh"]
                },
                "UG": {
                    "country": "Uganda",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": []
                },
                "UM": {
                    "country": "United States Minor Outlying Islands",
                    "continent_code": "OC",
                    "continent": "Oceania",
                    "maps": []
                },
                "US": {
                    "country": "United States",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": ["usaLow", "usaHigh", "usaTerritoriesLow", "usaTerritoriesHigh", "usaTerritories2Low", "usaTerritories2High"]
                },
                "UY": {
                    "country": "Uruguay",
                    "continent_code": "SA",
                    "continent": "South America",
                    "maps": []
                },
                "UZ": {
                    "country": "Uzbekistan",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["uzbekinstanLow", "uzbekinstanHigh"]
                },
                "VA": {
                    "country": "Holy See (Vatican City State)",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["vaticanLow", "vaticanHigh"]
                },
                "VC": {
                    "country": "Saint Vincent and the Grenadines",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": ["saintVincentLow", "saintVincentHigh"]
                },
                "VE": {
                    "country": "Venezuela, Bolivarian Republic of",
                    "continent_code": "SA",
                    "continent": "South America",
                    "maps": ["venezuelaLow", "venezuelaHigh"]
                },
                "VG": {
                    "country": "Virgin Islands, British",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": []
                },
                "VI": {
                    "country": "Virgin Islands, U.S.",
                    "continent_code": "NA",
                    "continent": "North America",
                    "maps": []
                },
                "VN": {
                    "country": "Viet Nam",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["vietnamLow", "vietnamHigh"]
                },
                "VU": {
                    "country": "Vanuatu",
                    "continent_code": "OC",
                    "continent": "Oceania",
                    "maps": []
                },
                "WF": {
                    "country": "Wallis and Futuna",
                    "continent_code": "OC",
                    "continent": "Oceania",
                    "maps": []
                },
                "WS": {
                    "country": "Samoa",
                    "continent_code": "OC",
                    "continent": "Oceania",
                    "maps": ["samoaLow", "samoaHigh"]
                },
                "YE": {
                    "country": "Yemen",
                    "continent_code": "AS",
                    "continent": "Asia",
                    "maps": ["yemenLow", "yemenHigh"]
                },
                "YT": {
                    "country": "Mayotte",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": []
                },
                "ZA": {
                    "country": "South Africa",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["southAfricaLow", "southAfricaHigh"]
                },
                "ZM": {
                    "country": "Zambia",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["zambiaLow", "zambiaHigh"]
                },
                "ZW": {
                    "country": "Zimbabwe",
                    "continent_code": "AF",
                    "continent": "Africa",
                    "maps": ["zimbabweLow", "zimbabweHigh"]
                },
                "XK": {
                    "country": "Kosovo",
                    "continent_code": "EU",
                    "continent": "Europe",
                    "maps": ["kosovoLow", "kosovoHigh"]
                }
            };


            var continents = {
                "AF": 0,
                "AN": 1,
                "AS": 2,
                "EU": 3,
                "NA": 4,
                "OC": 5,
                "SA": 6
            }

            // Create map instance
            var chart = am4core.create("chartdiv", am4maps.MapChart);
            chart.projection = new am4maps.projections.Miller();

            // Create map polygon series for world map
            var worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
            worldSeries.useGeodata = true;
            worldSeries.geodata = am4geodata_worldLow;
            worldSeries.exclude = ["AQ"];

            var worldPolygon = worldSeries.mapPolygons.template;
            worldPolygon.tooltipText = "{name}";
            worldPolygon.nonScalingStroke = true;
            worldPolygon.strokeOpacity = 0.5;
            worldPolygon.fill = am4core.color("#eee");
            worldPolygon.propertyFields.fill = "color";

            var hs = worldPolygon.states.create("hover");
            hs.properties.fill = chart.colors.getIndex(9);


            // Create country specific series (but hide it for now)
            var countrySeries = chart.series.push(new am4maps.MapPolygonSeries());
            countrySeries.useGeodata = true;
            countrySeries.hide();
            countrySeries.geodataSource.events.on("done", function(ev) {
                worldSeries.hide();
                countrySeries.show();
            });

            var countryPolygon = countrySeries.mapPolygons.template;
            countryPolygon.tooltipText = "{name}";
            countryPolygon.nonScalingStroke = true;
            countryPolygon.strokeOpacity = 0.5;
            countryPolygon.fill = am4core.color("#eee");

            var hs = countryPolygon.states.create("hover");
            hs.properties.fill = chart.colors.getIndex(9);

            // Set up click events
            worldPolygon.events.on("hit", function(ev) {
                ev.target.series.chart.zoomToMapObject(ev.target);
                var map = ev.target.dataItem.dataContext.map;
                if (map) {
                    ev.target.isHover = false;
                    countrySeries.geodataSource.url = "https://www.amcharts.com/lib/4/geodata/json/" + map + ".json";
                    countrySeries.geodataSource.load();
                }
            });

            // Set up data for countries
            var data = [];
            for (var id in countries) {
                if (countries.hasOwnProperty(id)) {
                    var country = countries[id];
                    if (country.maps.length) {
                        data.push({
                            id: id,
                            color: chart.colors.getIndex(continents[country.continent_code]),
                            map: country.maps[0]
                        });
                    }
                }
            }
            worldSeries.data = data;

            // Zoom control
            chart.zoomControl = new am4maps.ZoomControl();

            var homeButton = new am4core.Button();
            homeButton.events.on("hit", function() {
                worldSeries.show();
                countrySeries.hide();
                chart.goHome();
            });

            homeButton.icon = new am4core.Sprite();
            homeButton.padding(7, 5, 7, 5);
            homeButton.width = 30;
            homeButton.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
            homeButton.marginBottom = 10;
            homeButton.parent = chart.zoomControl;
            homeButton.insertBefore(chart.zoomControl.plusButton);

        });
    });
}


// calender js
if (jQuery('#calendar').length) {
    document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            plugins: ['dayGrid']
        });
        calendar.render();
    });
}

// calender 1 js
if (jQuery('#calendar1').length) {
    document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar1');

        var calendar1 = new FullCalendar.Calendar(calendarEl, {
            plugins: ['timeGrid', 'dayGrid', 'list'],
            timeZone: 'UTC',
            defaultView: 'dayGridMonth',
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            },
            events: [{
                title: 'All Day Event',
                start: '2019-12-01',
                color: '#fc9919'
            }, {
                title: 'Long Event',
                start: '2019-12-07',
                end: '2019-12-10',
                color: '#ffc107' // override!
            }, {
                groupId: '999',
                title: 'Repeating Event',
                start: '2019-12-09T16:00:00',
                color: '#17a2b8'
            }, {
                groupId: '999',
                title: 'Repeating Event',
                start: '2019-12-16T16:00:00',
                color: '#17a2b8'
            }, {
                title: 'Conference',
                start: '2019-12-11',
                end: '2019-12-13',
                color: '#27e3f4' // override!
            }, {
                title: 'Meeting',
                start: '2019-12-12T10:30:00',
                end: '2019-12-12T12:30:00',
                color: '#f15773'
            }, {
                title: 'Lunch',
                start: '2019-12-12T12:00:00',
                color: '#777D74'
            }, {
                title: 'Meeting',
                start: '2019-12-12T14:30:00',
                color: '#f15773'
            }, {
                title: 'Birthday Party',
                start: '2019-12-28T07:00:00',
                color: '#28a745'
            }, {
                title: 'Meeting',
                start: '2020-01-12T14:30:00',
                color: '#f15773'
            }, {
                title: 'Birthday Party',
                start: '2020-01-02T07:00:00',
                color: '#28a745'
            }, {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2020-01-25'
            }, {
                title: 'Birthday Party',
                start: '2020-01-13T07:00:00',
                color: '#28a745'
            }, {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2019-12-28'
            }, {
                title: 'Meeting',
                start: '2020-01-12T14:30:00',
                color: '#f15773'
            }, {
                title: 'Birthday Party',
                start: '2020-01-13T07:00:00',
                color: '#28a745'
            }, {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2020-01-28'
            }, {
                title: 'All Day Event',
                start: '2020-02-01',
                color: '#fc9919'
            }, {
                title: 'Long Event',
                start: '2020-02-07',
                end: '2020-02-10',
                color: '#ffc107' // override!
            }, {
                groupId: '999',
                title: 'Repeating Event',
                start: '2020-02-09T16:00:00',
                color: '#17a2b8'
            }, {
                groupId: '999',
                title: 'Repeating Event',
                start: '2020-02-16T16:00:00',
                color: '#17a2b8'
            }]
        });


        calendar1.render();
    });
}

// Chart Apex js
if (jQuery('#apex-basic').length) {
    var options = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        colors: ['#f15773'],
        series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'Product Trends by Month',
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
    }

    var chart = new ApexCharts(
        document.querySelector("#apex-basic"),
        options
    );

    chart.render();
}
if (jQuery('#apex-line-area').length) {
    var options = {
        chart: {
            height: 350,
            type: 'area',
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        colors: ['#f15773', '#4F6272'],
        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
        }],

        xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        }
    }

    var chart = new ApexCharts(
        document.querySelector("#apex-line-area"),
        options
    );

    chart.render();
}
if (jQuery('#apex-bar').length) {
    var options = {
        chart: {
            height: 350,
            type: 'bar',
        },
        colors: ['#f15773'],
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        series: [{
            data: [470, 540, 580, 690, 1100, 1200, 1380]
        }],
        xaxis: {
            categories: ['Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
        }
    }

    var chart = new ApexCharts(
        document.querySelector("#apex-bar"),
        options
    );

    chart.render();
}
if (jQuery('#apex-column').length) {
    var options = {
        chart: {
            height: 350,
            type: 'bar',
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        colors: ['#f15773', '#4F6272', '#ffc107'],
        series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58]
        }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105]
        }, {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48]
        }],
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        },
        yaxis: {
            title: {
                text: '$ (thousands)'
            }
        },
        fill: {
            opacity: 1

        },
        tooltip: {
            y: {
                formatter: function(val) {
                    return "$ " + val + " thousands"
                }
            }
        }
    }

    var chart = new ApexCharts(
        document.querySelector("#apex-column"),
        options
    );

    chart.render();
}

if (jQuery('#apex-mixed-chart').length) {
    var options = {
        chart: {
            height: 350,
            type: 'line',
            stacked: false,
        },
        stroke: {
            width: [0, 2, 5],
            curve: 'smooth'
        },
        plotOptions: {
            bar: {
                columnWidth: '50%'
            }
        },
        colors: ['#ffc107', '#4F6272', '#f15773'],
        series: [{
            name: 'Facebook',
            type: 'column',
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
        }, {
            name: 'Vine',
            type: 'area',
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        }, {
            name: 'Dribbble',
            type: 'line',
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
        }],
        fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
                inverseColors: false,
                shade: 'light',
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100]
            }
        },
        labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],
        markers: {
            size: 0
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            min: 0
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: function(y) {
                    if (typeof y !== "undefined") {
                        return y.toFixed(0) + " views";
                    }
                    return y;

                }
            }
        },
        legend: {
            labels: {
                useSeriesColors: true
            },
            markers: {
                customHTML: [
                    function() {
                        return ''
                    },
                    function() {
                        return ''
                    },
                    function() {
                        return ''
                    }
                ]
            }
        }
    }

    var chart = new ApexCharts(
        document.querySelector("#apex-mixed-chart"),
        options
    );

    chart.render();
}

if (jQuery('#apex-candlestick-chart').length) {
    var options = {
        chart: {
            height: 350,
            type: 'candlestick',
        },
        series: [{
            data: [{
                x: new Date(1538778600000),
                y: [6629.81, 6650.5, 6623.04, 6633.33]
            }, {
                x: new Date(1538780400000),
                y: [6632.01, 6643.59, 6620, 6630.11]
            }, {
                x: new Date(1538782200000),
                y: [6630.71, 6648.95, 6623.34, 6635.65]
            }, {
                x: new Date(1538784000000),
                y: [6635.65, 6651, 6629.67, 6638.24]
            }, {
                x: new Date(1538785800000),
                y: [6638.24, 6640, 6620, 6624.47]
            }, {
                x: new Date(1538787600000),
                y: [6624.53, 6636.03, 6621.68, 6624.31]
            }, {
                x: new Date(1538789400000),
                y: [6624.61, 6632.2, 6617, 6626.02]
            }, {
                x: new Date(1538791200000),
                y: [6627, 6627.62, 6584.22, 6603.02]
            }, {
                x: new Date(1538793000000),
                y: [6605, 6608.03, 6598.95, 6604.01]
            }, {
                x: new Date(1538794800000),
                y: [6604.5, 6614.4, 6602.26, 6608.02]
            }, {
                x: new Date(1538796600000),
                y: [6608.02, 6610.68, 6601.99, 6608.91]
            }, {
                x: new Date(1538798400000),
                y: [6608.91, 6618.99, 6608.01, 6612]
            }, {
                x: new Date(1538800200000),
                y: [6612, 6615.13, 6605.09, 6612]
            }, {
                x: new Date(1538802000000),
                y: [6612, 6624.12, 6608.43, 6622.95]
            }, {
                x: new Date(1538803800000),
                y: [6623.91, 6623.91, 6615, 6615.67]
            }, {
                x: new Date(1538805600000),
                y: [6618.69, 6618.74, 6610, 6610.4]
            }, {
                x: new Date(1538807400000),
                y: [6611, 6622.78, 6610.4, 6614.9]
            }, {
                x: new Date(1538809200000),
                y: [6614.9, 6626.2, 6613.33, 6623.45]
            }, {
                x: new Date(1538811000000),
                y: [6623.48, 6627, 6618.38, 6620.35]
            }, {
                x: new Date(1538812800000),
                y: [6619.43, 6620.35, 6610.05, 6615.53]
            }, {
                x: new Date(1538814600000),
                y: [6615.53, 6617.93, 6610, 6615.19]
            }, {
                x: new Date(1538816400000),
                y: [6615.19, 6621.6, 6608.2, 6620]
            }, {
                x: new Date(1538818200000),
                y: [6619.54, 6625.17, 6614.15, 6620]
            }, {
                x: new Date(1538820000000),
                y: [6620.33, 6634.15, 6617.24, 6624.61]
            }, {
                x: new Date(1538821800000),
                y: [6625.95, 6626, 6611.66, 6617.58]
            }, {
                x: new Date(1538823600000),
                y: [6619, 6625.97, 6595.27, 6598.86]
            }, {
                x: new Date(1538825400000),
                y: [6598.86, 6598.88, 6570, 6587.16]
            }, {
                x: new Date(1538827200000),
                y: [6588.86, 6600, 6580, 6593.4]
            }, {
                x: new Date(1538829000000),
                y: [6593.99, 6598.89, 6585, 6587.81]
            }, {
                x: new Date(1538830800000),
                y: [6587.81, 6592.73, 6567.14, 6578]
            }, {
                x: new Date(1538832600000),
                y: [6578.35, 6581.72, 6567.39, 6579]
            }, {
                x: new Date(1538834400000),
                y: [6579.38, 6580.92, 6566.77, 6575.96]
            }, {
                x: new Date(1538836200000),
                y: [6575.96, 6589, 6571.77, 6588.92]
            }, {
                x: new Date(1538838000000),
                y: [6588.92, 6594, 6577.55, 6589.22]
            }, {
                x: new Date(1538839800000),
                y: [6589.3, 6598.89, 6589.1, 6596.08]
            }, {
                x: new Date(1538841600000),
                y: [6597.5, 6600, 6588.39, 6596.25]
            }, {
                x: new Date(1538843400000),
                y: [6598.03, 6600, 6588.73, 6595.97]
            }, {
                x: new Date(1538845200000),
                y: [6595.97, 6602.01, 6588.17, 6602]
            }, {
                x: new Date(1538847000000),
                y: [6602, 6607, 6596.51, 6599.95]
            }, {
                x: new Date(1538848800000),
                y: [6600.63, 6601.21, 6590.39, 6591.02]
            }, {
                x: new Date(1538850600000),
                y: [6591.02, 6603.08, 6591, 6591]
            }, {
                x: new Date(1538852400000),
                y: [6591, 6601.32, 6585, 6592]
            }, {
                x: new Date(1538854200000),
                y: [6593.13, 6596.01, 6590, 6593.34]
            }, {
                x: new Date(1538856000000),
                y: [6593.34, 6604.76, 6582.63, 6593.86]
            }, {
                x: new Date(1538857800000),
                y: [6593.86, 6604.28, 6586.57, 6600.01]
            }, {
                x: new Date(1538859600000),
                y: [6601.81, 6603.21, 6592.78, 6596.25]
            }, {
                x: new Date(1538861400000),
                y: [6596.25, 6604.2, 6590, 6602.99]
            }, {
                x: new Date(1538863200000),
                y: [6602.99, 6606, 6584.99, 6587.81]
            }, {
                x: new Date(1538865000000),
                y: [6587.81, 6595, 6583.27, 6591.96]
            }, {
                x: new Date(1538866800000),
                y: [6591.97, 6596.07, 6585, 6588.39]
            }, {
                x: new Date(1538868600000),
                y: [6587.6, 6598.21, 6587.6, 6594.27]
            }, {
                x: new Date(1538870400000),
                y: [6596.44, 6601, 6590, 6596.55]
            }, {
                x: new Date(1538872200000),
                y: [6598.91, 6605, 6596.61, 6600.02]
            }, {
                x: new Date(1538874000000),
                y: [6600.55, 6605, 6589.14, 6593.01]
            }, {
                x: new Date(1538875800000),
                y: [6593.15, 6605, 6592, 6603.06]
            }, ]
        }],
        title: {
            text: 'CandleStick Chart',
            align: 'left'
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        }
    }

    var chart = new ApexCharts(
        document.querySelector("#apex-candlestick-chart"),
        options
    );
    chart.render();
}

if (jQuery('#apex-bubble-chart').length) {
    function generateData(baseval, count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

            series.push([baseval, y, z]);
            baseval += 86400000;
            i++;
        }
        return series;
    }


    var options = {
        chart: {
            height: 350,
            type: 'bubble',
        },
        dataLabels: {
            enabled: false
        },
        series: [{
            name: 'Product1',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 40
            })
        }, {
            name: 'Product2',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 40
            })
        }, {
            name: 'Product3',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 40
            })
        }],
        fill: {
            type: 'gradient',
        },
        colors: ['#f15773', '#4F6272', '#e64141'],
        title: {
            text: '3D Bubble Chart'
        },
        xaxis: {
            tickAmount: 12,
            type: 'datetime',

            labels: {
                rotate: 0,
            }
        },
        yaxis: {
            max: 40
        },
        theme: {
            palette: 'palette2'
        }
    }

    var chart = new ApexCharts(
        document.querySelector("#apex-bubble-chart"),
        options
    );

    chart.render();
}

if (jQuery('#apex-scatter-chart').length) {
    var options = {
        chart: {
            height: 350,
            type: 'scatter',
            zoom: {
                enabled: true,
                type: 'xy'
            }
        },
        colors: ['#f15773', '#4F6272', '#00d0ff'],
        series: [{
            name: "SAMPLE A",
            data: [
                [16.4, 5.4],
                [21.7, 2],
                [10.9, 0],
                [10.9, 8.2],
                [16.4, 0],
                [16.4, 1.8],
                [13.6, 0.3],
                [13.6, 0],
                [29.9, 0],
                [27.1, 2.3],
                [16.4, 0],
                [13.6, 3.7],
                [10.9, 5.2],
                [16.4, 6.5],
                [10.9, 0],
                [24.5, 7.1],
                [10.9, 0],
                [8.1, 4.7]
            ]
        }, {
            name: "SAMPLE B",
            data: [
                [36.4, 13.4],
                [1.7, 11],
                [1.9, 9],
                [1.9, 13.2],
                [1.4, 7],
                [6.4, 8.8],
                [3.6, 4.3],
                [1.6, 10],
                [9.9, 2],
                [7.1, 15],
                [1.4, 0],
                [3.6, 13.7],
                [1.9, 15.2],
                [6.4, 16.5],
                [0.9, 10],
                [4.5, 17.1],
                [10.9, 10],
                [0.1, 14.7]
            ]
        }, {
            name: "SAMPLE C",
            data: [
                [21.7, 3],
                [23.6, 3.5],
                [28, 4],
                [27.1, 0.3],
                [16.4, 4],
                [13.6, 0],
                [19, 5],
                [22.4, 3],
                [24.5, 3],
                [32.6, 3],
                [27.1, 4],
                [29.6, 6],
                [31.6, 8],
                [21.6, 5],
                [20.9, 4],
                [22.4, 0],
                [32.6, 10.3],
                [29.7, 20.8]
            ]
        }],
        xaxis: {
            tickAmount: 5,
            labels: {
                formatter: function(val) {
                    return parseFloat(val).toFixed(1)
                }
            }
        },
        yaxis: {
            tickAmount: 5
        }
    }

    var chart = new ApexCharts(
        document.querySelector("#apex-scatter-chart"),
        options
    );

    chart.render();
}
if (jQuery('#apex-radialbar-chart').length) {
    var options = {
        chart: {
            height: 350,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function(w) {
                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                            return 249
                        }
                    }
                }
            }
        },
        series: [44, 55, 67, 83],
        labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        colors: ['#f15773', '#4F6272', '#e64141', '#ffd400'],

    }

    var chart = new ApexCharts(
        document.querySelector("#apex-radialbar-chart"),
        options
    );

    chart.render();
}
if (jQuery('#apex-pie-chart').length) {
    var options = {
        chart: {
            width: 380,
            type: 'pie',
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        series: [44, 55, 13, 43, 22],
        colors: ['#f15773', '#4F6272', '#e64141', '#ffd400', '#00d0ff'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }

    var chart = new ApexCharts(
        document.querySelector("#apex-pie-chart"),
        options
    );

    chart.render();
}


/*---------------------------------------------------------------------
   circle progress bar
-----------------------------------------------------------------------*/
$(function() {

    $(".progress-round").each(function() {

        var value = $(this).attr('data-value');
        var left = $(this).find('.progress-left .progress-bar');
        var right = $(this).find('.progress-right .progress-bar');

        if (value > 0) {
            if (value <= 50) {
                right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
            } else {
                right.css('transform', 'rotate(180deg)')
                left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
            }
        }

    })

    function percentageToDegrees(percentage) {

        return percentage / 100 * 360

    }

});



/*---------------------------------------------------------------------
Form Validation
-----------------------------------------------------------------------*/


window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
}, false);



/*---------------------------------------------------------------------
    Form Wizard - 1
-----------------------------------------------------------------------*/

var current_fs, next_fs, previous_fs;
var opacity;
var current = 1;
var steps = jQuery("fieldset").length;

setProgressBar(current);

$(".next").click(function() {

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();


    jQuery("#top-tab-list li").eq(jQuery("fieldset").index(next_fs)).addClass("active");
    jQuery("#top-tab-list li").eq(jQuery("fieldset").index(current_fs)).addClass("done");


    next_fs.show();
    current_fs.animate({
        opacity: 0
    }, {
        step: function(now) {
            opacity = 1 - now;

            current_fs.css({
                'display': 'none',
                'position': 'relative',

            });

            next_fs.css({
                'opacity': opacity
            });
        },
        duration: 500
    });
    setProgressBar(++current);
});

jQuery(".previous").click(function() {

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();


    jQuery("#top-tab-list li").eq(jQuery("fieldset").index(current_fs)).removeClass("active");
    jQuery("#top-tab-list li").eq(jQuery("fieldset").index(previous_fs)).removeClass("done");


    previous_fs.show();

    current_fs.animate({
        opacity: 0
    }, {
        step: function(now) {
            opacity = 1 - now;

            current_fs.css({
                'display': 'none',
                'position': 'relative'
            });
            previous_fs.css({
                'opacity': opacity
            });
        },
        duration: 500
    });
    setProgressBar(--current);
});

function setProgressBar(curStep) {
    var percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    jQuery(".progress-bar")
        .css("width", percent + "%")
}

jQuery(".submit").click(function() {
    return false;
})


/*---------------------------------------------------------------------
   validate form wizard
-----------------------------------------------------------------------*/

var navListItems = jQuery('div.setup-panel div a'),
    allWells = jQuery('.setup-content'),
    allNextBtn = jQuery('.nextBtn');

allWells.hide();

navListItems.click(function(e) {
    e.preventDefault();
    var $target = jQuery(jQuery(this).attr('href')),
        $item = jQuery(this);

    if (!$item.hasClass('disabled')) {
        navListItems.addClass('active');
        $item.parent().addClass('active');
        allWells.hide();
        $target.show();
        $target.find('input:eq(0)').focus();
    }
});

allNextBtn.click(function() {
    var curStep = jQuery(this).closest(".setup-content"),
        curStepBtn = curStep.attr("id"),
        nextStepWizard = jQuery('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
        curInputs = curStep.find("input[type='text'],input[type='email'],input[type='password'],input[type='url'],textarea"),
        isValid = true;

    jQuery(".form-group").removeClass("has-error");
    for (var i = 0; i < curInputs.length; i++) {
        if (!curInputs[i].validity.valid) {
            isValid = false;
            jQuery(curInputs[i]).closest(".form-group").addClass("has-error");
        }
    }

    if (isValid)
        nextStepWizard.removeClass('disabled').trigger('click');
});

jQuery('div.setup-panel div a.active').trigger('click');

/*---------------------------------------------------------------------
   Vertical form wizard
-----------------------------------------------------------------------*/


var current_fs, next_fs, previous_fs; //fieldsets
var opacity;
var current = 1;
var steps = jQuery("fieldset").length;

setProgressBar(current);

$(".next").click(function() {

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();


    jQuery("#top-tabbar-vertical li").eq(jQuery("fieldset").index(next_fs)).addClass("active");


    next_fs.show();
    current_fs.animate({
        opacity: 0
    }, {
        step: function(now) {
            opacity = 1 - now;

            current_fs.css({
                'display': 'none',
                'position': 'relative'
            });
            next_fs.css({
                'opacity': opacity
            });
        },
        duration: 500
    });
    setProgressBar(++current);
});

jQuery(".previous").click(function() {

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    jQuery("#top-tabbar-vertical li").eq(jQuery("fieldset").index(current_fs)).removeClass("active");

    previous_fs.show();

    current_fs.animate({
        opacity: 0
    }, {
        step: function(now) {
            opacity = 1 - now;

            current_fs.css({
                'display': 'none',
                'position': 'relative'
            });
            previous_fs.css({
                'opacity': opacity
            });
        },
        duration: 500
    });
    setProgressBar(--current);
});

function setProgressBar(curStep) {
    var percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    jQuery(".progress-bar")
        .css("width", percent + "%")
}

jQuery(".submit").click(function() {
    return false;
})

/*---------------------------------------------------------------------
   validate Vertical form wizard
-----------------------------------------------------------------------*/

var navListItem = jQuery('div.setup-panel-data div a'),
    allWell = jQuery('.setup-content-data'),
    allNextButton = jQuery('.next-Btn');

allWell.hide();

navListItem.click(function(e) {
    e.preventDefault();
    var $target = jQuery(jQuery(this).attr('href')),
        $item = jQuery(this);

    if (!$item.hasClass('disabled')) {
        navListItem.addClass('active');
        $item.parent().addClass('active');
        allWell.hide();
        $target.show();
        $target.find('input:eq(0)').focus();
    }
});

allNextButton.click(function() {
    var curStep = jQuery(this).closest(".setup-content-data"),
        curStepBtn = curStep.attr("id"),
        nextStepWizard = jQuery('div.setup-panel-data div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
        curInputs = curStep.find("input[type='text'],input[type='email'],input[type='password'],input[type='url'],input[type='date'],input[type='radio'],textarea"),
        isValid = true;


    jQuery(".form-group").removeClass("has-error");
    for (var i = 0; i < curInputs.length; i++) {
        if (!curInputs[i].validity.valid) {
            isValid = false;
            jQuery(curInputs[i]).closest(".form-group").addClass("has-error");
        }
    }

    if (isValid)
        nextStepWizard.removeClass('disabled').trigger('click');
});

jQuery('div.setup-panel-data div a.active').trigger('click');