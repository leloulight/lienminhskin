﻿jQuery(document).ready(function ($) {
    $('head').append('<style id="themecolors" type="text/css"></style>');
    $('.handler').click(function () {
        if ($(this).hasClass('closed')) {
            $(this).next('.options').parent().animate({left: 0}, 300, function () {
                $(this).find('.handler').removeClass('closed');
            });
        } else {
            $(this).parent().animate({left: '-244px'}, 300, function () {
                $(this).find('.handler').addClass('closed');
            });
        }
        return false;
    });
    $('.handler').parent().delay(1000).animate({left: '-244px'}, 300, function () {
        $(this).find('.handler').addClass('closed');
    });

    // L
    if ($('#layouts').val() == 'full')
        var prev_bg = $('body').css('background');
    $('#layouts').change(function () {
        var layouts = $(this).val();
        if (layouts == 'full') {
            $('#layout').removeClass('boxed').removeClass('boxed-margin').addClass('full');
        } else if (layouts == 'boxed') {
            $('#layout').removeClass('full').removeClass('boxed-margin').addClass('boxed');
        } else if (layouts == 'boxed-margin') {
            $('#layout').removeClass('full').removeClass('boxed').addClass('boxed-margin');
        }

        $(window).trigger('resize');
    });

    // V
    $('body').append('<div class="versionss"></div>');
    $('#version').change(function () {
        var version = $(this).val();
        if (version == 'light') {
            $('.versionss').html('');
        } else if (version == 'dark') {
            $('.versionss').html('<link rel="stylesheet" type="text/css" href="http://theme20.com/sevenmag/dark.css" id="dark" media="screen" />');
        }
        $(window).trigger('resize');
    });

    // Fonts
    $('#hfont').append('<option value="Abel">Abel</option> <option value="Abril Fatface">Abril Fatface</option> <option value="Aclonica">Aclonica</option> <option value="Acme">Acme</option> <option value="Actor">Actor</option> <option value="Adamina">Adamina</option> <option value="Advent Pro">Advent Pro</option> <option value="Aguafina Script">Aguafina Script</option> <option value="Akronim">Akronim</option> <option value="Aladin">Aladin</option> <option value="Aldrich">Aldrich</option> <option value="Alef">Alef</option> <option value="Alegreya">Alegreya</option> <option value="Alegreya SC">Alegreya SC</option> <option value="Alex Brush">Alex Brush</option> <option value="Alfa Slab One">Alfa Slab One</option> <option value="Alice">Alice</option> <option value="Alike">Alike</option> <option value="Alike Angular">Alike Angular</option> <option value="Allan">Allan</option> <option value="Allerta">Allerta</option> <option value="Allerta Stencil">Allerta Stencil</option> <option value="Allura">Allura</option> <option value="Almendra">Almendra</option> <option value="Almendra Display">Almendra Display</option> <option value="Almendra SC">Almendra SC</option> <option value="Amarante">Amarante</option> <option value="Amaranth">Amaranth</option> <option value="Amatic SC">Amatic SC</option> <option value="Amethysta">Amethysta</option> <option value="Anaheim">Anaheim</option> <option value="Andada">Andada</option> <option value="Andika">Andika</option> <option value="Angkor">Angkor</option> <option value="Annie Use Your Telescope">Annie Use Your Telescope</option> <option value="Anonymous Pro">Anonymous Pro</option> <option value="Antic">Antic</option> <option value="Antic Didone">Antic Didone</option> <option value="Antic Slab">Antic Slab</option> <option value="Anton">Anton</option> <option value="Arapey">Arapey</option> <option value="Arbutus">Arbutus</option> <option value="Arbutus Slab">Arbutus Slab</option> <option value="Architects Daughter">Architects Daughter</option> <option value="Archivo Black">Archivo Black</option> <option value="Archivo Narrow">Archivo Narrow</option> <option value="Arimo">Arimo</option> <option value="Arizonia">Arizonia</option> <option value="Armata">Armata</option> <option value="Artifika">Artifika</option> <option value="Arvo">Arvo</option> <option value="Asap">Asap</option> <option value="Asset">Asset</option> <option value="Astloch">Astloch</option> <option value="Asul">Asul</option> <option value="Atomic Age">Atomic Age</option> <option value="Aubrey">Aubrey</option> <option value="Audiowide">Audiowide</option> <option value="Autour One">Autour One</option> <option value="Average">Average</option> <option value="Average Sans">Average Sans</option> <option value="Averia Gruesa Libre">Averia Gruesa Libre</option> <option value="Averia Libre">Averia Libre</option> <option value="Averia Sans Libre">Averia Sans Libre</option> <option value="Averia Serif Libre">Averia Serif Libre</option> <option value="Bad Script">Bad Script</option> <option value="Balthazar">Balthazar</option> <option value="Bangers">Bangers</option> <option value="Basic">Basic</option> <option value="Battambang">Battambang</option> <option value="Baumans">Baumans</option> <option value="Bayon">Bayon</option> <option value="Belgrano">Belgrano</option> <option value="Belleza">Belleza</option> <option value="BenchNine">BenchNine</option> <option value="Bentham">Bentham</option> <option value="Berkshire Swash">Berkshire Swash</option> <option value="Bevan">Bevan</option> <option value="Bigelow Rules">Bigelow Rules</option> <option value="Bigshot One">Bigshot One</option> <option value="Bilbo">Bilbo</option> <option value="Bilbo Swash Caps">Bilbo Swash Caps</option> <option value="Bitter">Bitter</option> <option value="Black Ops One">Black Ops One</option> <option value="Bokor">Bokor</option> <option value="Bonbon">Bonbon</option> <option value="Boogaloo">Boogaloo</option> <option value="Bowlby One">Bowlby One</option> <option value="Bowlby One SC">Bowlby One SC</option> <option value="Brawler">Brawler</option> <option value="Bree Serif">Bree Serif</option> <option value="Bubblegum Sans">Bubblegum Sans</option> <option value="Bubbler One">Bubbler One</option> <option value="Buda:300">Buda:300</option> <option value="Buenard">Buenard</option> <option value="Butcherman">Butcherman</option> <option value="Butterfly Kids">Butterfly Kids</option> <option value="Cabin">Cabin</option> <option value="Cabin Condensed">Cabin Condensed</option> <option value="Cabin Sketch">Cabin Sketch</option> <option value="Caesar Dressing">Caesar Dressing</option> <option value="Cagliostro">Cagliostro</option> <option value="Calligraffitti">Calligraffitti</option> <option value="Cambo">Cambo</option> <option value="Candal">Candal</option> <option value="Cantarell">Cantarell</option> <option value="Cantata One">Cantata One</option> <option value="Cantora One">Cantora One</option> <option value="Capriola">Capriola</option> <option value="Cardo">Cardo</option> <option value="Carme">Carme</option> <option value="Carrois Gothic">Carrois Gothic</option> <option value="Carrois Gothic SC">Carrois Gothic SC</option> <option value="Carter One">Carter One</option> <option value="Caudex">Caudex</option> <option value="Cedarville Cursive">Cedarville Cursive</option> <option value="Ceviche One">Ceviche One</option> <option value="Changa One">Changa One</option> <option value="Chango">Chango</option> <option value="Chau Philomene One">Chau Philomene One</option> <option value="Chela One">Chela One</option> <option value="Chelsea Market">Chelsea Market</option> <option value="Chenla">Chenla</option> <option value="Cherry Cream Soda">Cherry Cream Soda</option> <option value="Cherry Swash">Cherry Swash</option> <option value="Chewy">Chewy</option> <option value="Chicle">Chicle</option> <option value="Chivo">Chivo</option> <option value="Cinzel">Cinzel</option> <option value="Cinzel Decorative">Cinzel Decorative</option> <option value="Clicker Script">Clicker Script</option> <option value="Coda">Coda</option> <option value="Coda Caption:800">Coda Caption:800</option> <option value="Codystar">Codystar</option> <option value="Combo">Combo</option> <option value="Comfortaa">Comfortaa</option> <option value="Coming Soon">Coming Soon</option> <option value="Concert One">Concert One</option> <option value="Condiment">Condiment</option> <option value="Content">Content</option> <option value="Contrail One">Contrail One</option> <option value="Convergence">Convergence</option> <option value="Cookie">Cookie</option> <option value="Copse">Copse</option> <option value="Corben">Corben</option> <option value="Courgette">Courgette</option> <option value="Cousine">Cousine</option> <option value="Coustard">Coustard</option> <option value="Covered By Your Grace">Covered By Your Grace</option> <option value="Crafty Girls">Crafty Girls</option> <option value="Creepster">Creepster</option> <option value="Crete Round">Crete Round</option> <option value="Crimson Text">Crimson Text</option> <option value="Croissant One">Croissant One</option> <option value="Crushed">Crushed</option> <option value="Cuprum">Cuprum</option> <option value="Cutive">Cutive</option> <option value="Cutive Mono">Cutive Mono</option> <option value="Damion">Damion</option> <option value="Dancing Script">Dancing Script</option> <option value="Dangrek">Dangrek</option> <option value="Dawning of a New Day">Dawning of a New Day</option> <option value="Days One">Days One</option> <option value="Delius">Delius</option> <option value="Delius Swash Caps">Delius Swash Caps</option> <option value="Delius Unicase">Delius Unicase</option> <option value="Della Respira">Della Respira</option> <option value="Denk One">Denk One</option> <option value="Devonshire">Devonshire</option> <option value="Didact Gothic">Didact Gothic</option> <option value="Diplomata">Diplomata</option> <option value="Diplomata SC">Diplomata SC</option> <option value="Domine">Domine</option> <option value="Donegal One">Donegal One</option> <option value="Doppio One">Doppio One</option> <option value="Dorsa">Dorsa</option> <option value="Dosis">Dosis</option> <option value="Dr Sugiyama">Dr Sugiyama</option> <option value="Droid Sans">Droid Sans</option> <option value="Droid Sans Mono">Droid Sans Mono</option> <option value="Droid Serif">Droid Serif</option> <option value="Duru Sans">Duru Sans</option> <option value="Dynalight">Dynalight</option> <option value="EB Garamond">EB Garamond</option> <option value="Eagle Lake">Eagle Lake</option> <option value="Eater">Eater</option> <option value="Economica">Economica</option> <option value="Electrolize">Electrolize</option> <option value="Elsie">Elsie</option> <option value="Elsie Swash Caps">Elsie Swash Caps</option> <option value="Emblema One">Emblema One</option> <option value="Emilys Candy">Emilys Candy</option> <option value="Engagement">Engagement</option> <option value="Englebert">Englebert</option> <option value="Enriqueta">Enriqueta</option> <option value="Erica One">Erica One</option> <option value="Esteban">Esteban</option> <option value="Euphoria Script">Euphoria Script</option> <option value="Ewert">Ewert</option> <option value="Exo">Exo</option> <option value="Expletus Sans">Expletus Sans</option> <option value="Fanwood Text">Fanwood Text</option> <option value="Fascinate">Fascinate</option> <option value="Fascinate Inline">Fascinate Inline</option> <option value="Faster One">Faster One</option> <option value="Fasthand">Fasthand</option> <option value="Fauna One">Fauna One</option> <option value="Federant">Federant</option> <option value="Federo">Federo</option> <option value="Felipa">Felipa</option> <option value="Fenix">Fenix</option> <option value="Finger Paint">Finger Paint</option> <option value="Fjalla One">Fjalla One</option> <option value="Fjord One">Fjord One</option> <option value="Flamenco">Flamenco</option> <option value="Flavors">Flavors</option> <option value="Fondamento">Fondamento</option> <option value="Fontdiner Swanky">Fontdiner Swanky</option> <option value="Forum">Forum</option> <option value="Francois One">Francois One</option> <option value="Freckle Face">Freckle Face</option> <option value="Fredericka the Great">Fredericka the Great</option> <option value="Fredoka One">Fredoka One</option> <option value="Freehand">Freehand</option> <option value="Fresca">Fresca</option> <option value="Frijole">Frijole</option> <option value="Fruktur">Fruktur</option> <option value="Fugaz One">Fugaz One</option> <option value="GFS Didot">GFS Didot</option> <option value="GFS Neohellenic">GFS Neohellenic</option> <option value="Gabriela">Gabriela</option> <option value="Gafata">Gafata</option> <option value="Galdeano">Galdeano</option> <option value="Galindo">Galindo</option> <option value="Gentium Basic">Gentium Basic</option> <option value="Gentium Book Basic">Gentium Book Basic</option> <option value="Geo">Geo</option> <option value="Geostar">Geostar</option> <option value="Geostar Fill">Geostar Fill</option> <option value="Germania One">Germania One</option> <option value="Gilda Display">Gilda Display</option> <option value="Give You Glory">Give You Glory</option> <option value="Glass Antiqua">Glass Antiqua</option> <option value="Glegoo">Glegoo</option> <option value="Gloria Hallelujah">Gloria Hallelujah</option> <option value="Goblin One">Goblin One</option> <option value="Gochi Hand">Gochi Hand</option> <option value="Gorditas">Gorditas</option> <option value="Goudy Bookletter 1911">Goudy Bookletter 1911</option> <option value="Graduate">Graduate</option> <option value="Grand Hotel">Grand Hotel</option> <option value="Gravitas One">Gravitas One</option> <option value="Great Vibes">Great Vibes</option> <option value="Griffy">Griffy</option> <option value="Gruppo">Gruppo</option> <option value="Gudea">Gudea</option> <option value="Habibi">Habibi</option> <option value="Hammersmith One">Hammersmith One</option> <option value="Hanalei">Hanalei</option> <option value="Hanalei Fill">Hanalei Fill</option> <option value="Handlee">Handlee</option> <option value="Hanuman">Hanuman</option> <option value="Happy Monkey">Happy Monkey</option> <option value="Headland One">Headland One</option> <option value="Henny Penny">Henny Penny</option> <option value="Herr Von Muellerhoff">Herr Von Muellerhoff</option> <option value="Holtwood One SC">Holtwood One SC</option> <option value="Homemade Apple">Homemade Apple</option> <option value="Homenaje">Homenaje</option> <option value="IM Fell DW Pica">IM Fell DW Pica</option> <option value="IM Fell DW Pica SC">IM Fell DW Pica SC</option> <option value="IM Fell Double Pica">IM Fell Double Pica</option> <option value="IM Fell Double Pica SC">IM Fell Double Pica SC</option> <option value="IM Fell English">IM Fell English</option> <option value="IM Fell English SC">IM Fell English SC</option> <option value="IM Fell French Canon">IM Fell French Canon</option> <option value="IM Fell French Canon SC">IM Fell French Canon SC</option> <option value="IM Fell Great Primer">IM Fell Great Primer</option> <option value="IM Fell Great Primer SC">IM Fell Great Primer SC</option> <option value="Iceberg">Iceberg</option> <option value="Iceland">Iceland</option> <option value="Imprima">Imprima</option> <option value="Inconsolata">Inconsolata</option> <option value="Inder">Inder</option> <option value="Indie Flower">Indie Flower</option> <option value="Inika">Inika</option> <option value="Irish Grover">Irish Grover</option> <option value="Istok Web">Istok Web</option> <option value="Italiana">Italiana</option> <option value="Italianno">Italianno</option> <option value="Jacques Francois">Jacques Francois</option> <option value="Jacques Francois Shadow">Jacques Francois Shadow</option> <option value="Jim Nightshade">Jim Nightshade</option> <option value="Jockey One">Jockey One</option> <option value="Jolly Lodger">Jolly Lodger</option> <option value="Josefin Sans">Josefin Sans</option> <option value="Josefin Slab">Josefin Slab</option> <option value="Joti One">Joti One</option> <option value="Judson">Judson</option> <option value="Julee">Julee</option> <option value="Julius Sans One">Julius Sans One</option> <option value="Junge">Junge</option> <option value="Jura">Jura</option> <option value="Just Another Hand">Just Another Hand</option> <option value="Just Me Again Down Here">Just Me Again Down Here</option> <option value="Kameron">Kameron</option> <option value="Karla">Karla</option> <option value="Kaushan Script">Kaushan Script</option> <option value="Kavoon">Kavoon</option> <option value="Keania One">Keania One</option> <option value="Kelly Slab">Kelly Slab</option> <option value="Kenia">Kenia</option> <option value="Khmer">Khmer</option> <option value="Kite One">Kite One</option> <option value="Knewave">Knewave</option> <option value="Kotta One">Kotta One</option> <option value="Koulen">Koulen</option> <option value="Kranky">Kranky</option> <option value="Kreon">Kreon</option> <option value="Kristi">Kristi</option> <option value="Krona One">Krona One</option> <option value="La Belle Aurore">La Belle Aurore</option> <option value="Lancelot">Lancelot</option> <option value="Lato">Lato</option> <option value="League Script">League Script</option> <option value="Leckerli One">Leckerli One</option> <option value="Ledger">Ledger</option> <option value="Lekton">Lekton</option> <option value="Lemon">Lemon</option> <option value="Libre Baskerville">Libre Baskerville</option> <option value="Life Savers">Life Savers</option> <option value="Lilita One">Lilita One</option> <option value="Lily Script One">Lily Script One</option> <option value="Limelight">Limelight</option> <option value="Linden Hill">Linden Hill</option> <option value="Lobster">Lobster</option> <option value="Lobster Two">Lobster Two</option> <option value="Londrina Outline">Londrina Outline</option> <option value="Londrina Shadow">Londrina Shadow</option> <option value="Londrina Sketch">Londrina Sketch</option> <option value="Londrina Solid">Londrina Solid</option> <option value="Lora">Lora</option> <option value="Love Ya Like A Sister">Love Ya Like A Sister</option> <option value="Loved by the King">Loved by the King</option> <option value="Lovers Quarrel">Lovers Quarrel</option> <option value="Luckiest Guy">Luckiest Guy</option> <option value="Lusitana">Lusitana</option> <option value="Lustria">Lustria</option> <option value="Macondo">Macondo</option> <option value="Macondo Swash Caps">Macondo Swash Caps</option> <option value="Magra">Magra</option> <option value="Maiden Orange">Maiden Orange</option> <option value="Mako">Mako</option> <option value="Marcellus">Marcellus</option> <option value="Marcellus SC">Marcellus SC</option> <option value="Marck Script">Marck Script</option> <option value="Margarine">Margarine</option> <option value="Marko One">Marko One</option> <option value="Marmelad">Marmelad</option> <option value="Marvel">Marvel</option> <option value="Mate">Mate</option> <option value="Mate SC">Mate SC</option> <option value="Maven Pro">Maven Pro</option> <option value="McLaren">McLaren</option> <option value="Meddon">Meddon</option> <option value="MedievalSharp">MedievalSharp</option> <option value="Medula One">Medula One</option> <option value="Megrim">Megrim</option> <option value="Meie Script">Meie Script</option> <option value="Merienda">Merienda</option> <option value="Merienda One">Merienda One</option> <option value="Merriweather">Merriweather</option> <option value="Merriweather Sans">Merriweather Sans</option> <option value="Metal">Metal</option> <option value="Metal Mania">Metal Mania</option> <option value="Metamorphous">Metamorphous</option> <option value="Metrophobic">Metrophobic</option> <option value="Michroma">Michroma</option> <option value="Milonga">Milonga</option> <option value="Miltonian">Miltonian</option> <option value="Miltonian Tattoo">Miltonian Tattoo</option> <option value="Miniver">Miniver</option> <option value="Miss Fajardose">Miss Fajardose</option> <option value="Modern Antiqua">Modern Antiqua</option> <option value="Molengo">Molengo</option> <option value="Molle:italic">Molle:italic</option> <option value="Monda">Monda</option> <option value="Monofett">Monofett</option> <option value="Monoton">Monoton</option> <option value="Monsieur La Doulaise">Monsieur La Doulaise</option> <option value="Montaga">Montaga</option> <option value="Montez">Montez</option> <option value="Montserrat">Montserrat</option> <option value="Montserrat Alternates">Montserrat Alternates</option> <option value="Montserrat Subrayada">Montserrat Subrayada</option> <option value="Moul">Moul</option> <option value="Moulpali">Moulpali</option> <option value="Mountains of Christmas">Mountains of Christmas</option> <option value="Mouse Memoirs">Mouse Memoirs</option> <option value="Mr Bedfort">Mr Bedfort</option> <option value="Mr Dafoe">Mr Dafoe</option> <option value="Mr De Haviland">Mr De Haviland</option> <option value="Mrs Saint Delafield">Mrs Saint Delafield</option> <option value="Mrs Sheppards">Mrs Sheppards</option> <option value="Muli">Muli</option> <option value="Mystery Quest">Mystery Quest</option> <option value="Neucha">Neucha</option> <option value="Neuton">Neuton</option> <option value="New Rocker">New Rocker</option> <option value="News Cycle">News Cycle</option> <option value="Niconne">Niconne</option> <option value="Nixie One">Nixie One</option> <option value="Nobile">Nobile</option> <option value="Nokora">Nokora</option> <option value="Norican">Norican</option> <option value="Nosifer">Nosifer</option> <option value="Nothing You Could Do">Nothing You Could Do</option> <option value="Noticia Text">Noticia Text</option> <option value="Noto Sans">Noto Sans</option> <option value="Noto Serif">Noto Serif</option> <option value="Nova Cut">Nova Cut</option> <option value="Nova Flat">Nova Flat</option> <option value="Nova Mono">Nova Mono</option> <option value="Nova Oval">Nova Oval</option> <option value="Nova Round">Nova Round</option> <option value="Nova Script">Nova Script</option> <option value="Nova Slim">Nova Slim</option> <option value="Nova Square">Nova Square</option> <option value="Numans">Numans</option> <option value="Nunito">Nunito</option> <option value="Odor Mean Chey">Odor Mean Chey</option> <option value="Offside">Offside</option> <option value="Old Standard TT">Old Standard TT</option> <option value="Oldenburg">Oldenburg</option> <option value="Oleo Script">Oleo Script</option> <option value="Oleo Script Swash Caps">Oleo Script Swash Caps</option> <option value="Open Sans">Open Sans</option> <option value="Open Sans Condensed:300">Open Sans Condensed:300</option> <option value="Open Sans Condensed:300italic">Open Sans Condensed:300italic</option> <option value="Open Sans Condensed:700">Open Sans Condensed:700</option> <option value="Oranienbaum">Oranienbaum</option> <option value="Orbitron">Orbitron</option> <option value="Oregano">Oregano</option> <option value="Orienta">Orienta</option> <option value="Original Surfer">Original Surfer</option> <option value="Oswald" selected="selected">Oswald</option> <option value="Over the Rainbow">Over the Rainbow</option> <option value="Overlock">Overlock</option> <option value="Overlock SC">Overlock SC</option> <option value="Ovo">Ovo</option> <option value="Oxygen">Oxygen</option> <option value="Oxygen Mono">Oxygen Mono</option> <option value="PT Mono">PT Mono</option> <option value="PT Sans">PT Sans</option> <option value="PT Sans Caption">PT Sans Caption</option> <option value="PT Sans Narrow">PT Sans Narrow</option> <option value="PT Serif">PT Serif</option> <option value="PT Serif Caption">PT Serif Caption</option> <option value="Pacifico">Pacifico</option> <option value="Paprika">Paprika</option> <option value="Parisienne">Parisienne</option> <option value="Passero One">Passero One</option> <option value="Passion One">Passion One</option> <option value="Pathway Gothic One">Pathway Gothic One</option> <option value="Patrick Hand">Patrick Hand</option> <option value="Patrick Hand SC">Patrick Hand SC</option> <option value="Patua One">Patua One</option> <option value="Paytone One">Paytone One</option> <option value="Peralta">Peralta</option> <option value="Permanent Marker">Permanent Marker</option> <option value="Petit Formal Script">Petit Formal Script</option> <option value="Petrona">Petrona</option> <option value="Philosopher">Philosopher</option> <option value="Piedra">Piedra</option> <option value="Pinyon Script">Pinyon Script</option> <option value="Pirata One">Pirata One</option> <option value="Plaster">Plaster</option> <option value="Play">Play</option> <option value="Playball">Playball</option> <option value="Playfair Display">Playfair Display</option> <option value="Playfair Display SC">Playfair Display SC</option> <option value="Podkova">Podkova</option> <option value="Poiret One">Poiret One</option> <option value="Poller One">Poller One</option> <option value="Poly">Poly</option> <option value="Pompiere">Pompiere</option> <option value="Pontano Sans">Pontano Sans</option> <option value="Port Lligat Sans">Port Lligat Sans</option> <option value="Port Lligat Slab">Port Lligat Slab</option> <option value="Prata">Prata</option> <option value="Preahvihear">Preahvihear</option> <option value="Press Start 2P">Press Start 2P</option> <option value="Princess Sofia">Princess Sofia</option> <option value="Prociono">Prociono</option> <option value="Prosto One">Prosto One</option> <option value="Puritan">Puritan</option> <option value="Purple Purse">Purple Purse</option> <option value="Quando">Quando</option> <option value="Quantico">Quantico</option> <option value="Quattrocento">Quattrocento</option> <option value="Quattrocento Sans">Quattrocento Sans</option> <option value="Questrial">Questrial</option> <option value="Quicksand">Quicksand</option> <option value="Quintessential">Quintessential</option> <option value="Qwigley">Qwigley</option> <option value="Racing Sans One">Racing Sans One</option> <option value="Radley">Radley</option> <option value="Raleway">Raleway</option> <option value="Raleway Dots">Raleway Dots</option> <option value="Rambla">Rambla</option> <option value="Rammetto One">Rammetto One</option> <option value="Ranchers">Ranchers</option> <option value="Rancho">Rancho</option> <option value="Rationale">Rationale</option> <option value="Redressed">Redressed</option> <option value="Reenie Beanie">Reenie Beanie</option> <option value="Revalia">Revalia</option> <option value="Ribeye">Ribeye</option> <option value="Ribeye Marrow">Ribeye Marrow</option> <option value="Righteous">Righteous</option> <option value="Risque">Risque</option> <option value="Roboto">Roboto</option> <option value="Roboto Condensed">Roboto Condensed</option> <option value="Roboto Slab">Roboto Slab</option> <option value="Rochester">Rochester</option> <option value="Rock Salt">Rock Salt</option> <option value="Rokkitt">Rokkitt</option> <option value="Romanesco">Romanesco</option> <option value="Ropa Sans">Ropa Sans</option> <option value="Rosario">Rosario</option> <option value="Rosarivo">Rosarivo</option> <option value="Rouge Script">Rouge Script</option> <option value="Ruda">Ruda</option> <option value="Rufina">Rufina</option> <option value="Ruge Boogie">Ruge Boogie</option> <option value="Ruluko">Ruluko</option> <option value="Rum Raisin">Rum Raisin</option> <option value="Ruslan Display">Ruslan Display</option> <option value="Russo One">Russo One</option> <option value="Ruthie">Ruthie</option> <option value="Rye">Rye</option> <option value="Sacramento">Sacramento</option> <option value="Sail">Sail</option> <option value="Salsa">Salsa</option> <option value="Sanchez">Sanchez</option> <option value="Sancreek">Sancreek</option> <option value="Sansita One">Sansita One</option> <option value="Sarina">Sarina</option> <option value="Satisfy">Satisfy</option> <option value="Scada">Scada</option> <option value="Schoolbell">Schoolbell</option> <option value="Seaweed Script">Seaweed Script</option> <option value="Sevillana">Sevillana</option> <option value="Seymour One">Seymour One</option> <option value="Shadows Into Light">Shadows Into Light</option> <option value="Shadows Into Light Two">Shadows Into Light Two</option> <option value="Shanti">Shanti</option> <option value="Share">Share</option> <option value="Share Tech">Share Tech</option> <option value="Share Tech Mono">Share Tech Mono</option> <option value="Shojumaru">Shojumaru</option> <option value="Short Stack">Short Stack</option> <option value="Siemreap">Siemreap</option> <option value="Sigmar One">Sigmar One</option> <option value="Signika">Signika</option> <option value="Signika Negative">Signika Negative</option> <option value="Simonetta">Simonetta</option> <option value="Sintony">Sintony</option> <option value="Sirin Stencil">Sirin Stencil</option> <option value="Six Caps">Six Caps</option> <option value="Skranji">Skranji</option> <option value="Slackey">Slackey</option> <option value="Smokum">Smokum</option> <option value="Smythe">Smythe</option> <option value="Sniglet:800">Sniglet:800</option> <option value="Snippet">Snippet</option> <option value="Snowburst One">Snowburst One</option> <option value="Sofadi One">Sofadi One</option> <option value="Sofia">Sofia</option> <option value="Sonsie One">Sonsie One</option> <option value="Sorts Mill Goudy">Sorts Mill Goudy</option> <option value="Source Code Pro">Source Code Pro</option> <option value="Source Sans Pro">Source Sans Pro</option> <option value="Special Elite">Special Elite</option> <option value="Spicy Rice">Spicy Rice</option> <option value="Spinnaker">Spinnaker</option> <option value="Spirax">Spirax</option> <option value="Squada One">Squada One</option> <option value="Stalemate">Stalemate</option> <option value="Stalinist One">Stalinist One</option> <option value="Stardos Stencil">Stardos Stencil</option> <option value="Stint Ultra Condensed">Stint Ultra Condensed</option> <option value="Stint Ultra Expanded">Stint Ultra Expanded</option> <option value="Stoke">Stoke</option> <option value="Strait">Strait</option> <option value="Sue Ellen Francisco">Sue Ellen Francisco</option> <option value="Sunshiney">Sunshiney</option> <option value="Supermercado One">Supermercado One</option> <option value="Suwannaphum">Suwannaphum</option> <option value="Swanky and Moo Moo">Swanky and Moo Moo</option> <option value="Syncopate">Syncopate</option> <option value="Tangerine">Tangerine</option> <option value="Taprom">Taprom</option> <option value="Tauri">Tauri</option> <option value="Telex">Telex</option> <option value="Tenor Sans">Tenor Sans</option> <option value="Text Me One">Text Me One</option> <option value="The Girl Next Door">The Girl Next Door</option> <option value="Tienne">Tienne</option> <option value="Tinos">Tinos</option> <option value="Titan One">Titan One</option> <option value="Titillium Web">Titillium Web</option> <option value="Trade Winds">Trade Winds</option> <option value="Trocchi">Trocchi</option> <option value="Trochut">Trochut</option> <option value="Trykker">Trykker</option> <option value="Tulpen One">Tulpen One</option> <option value="Ubuntu">Ubuntu</option> <option value="Ubuntu Condensed">Ubuntu Condensed</option> <option value="Ubuntu Mono">Ubuntu Mono</option> <option value="Ultra">Ultra</option> <option value="Uncial Antiqua">Uncial Antiqua</option> <option value="Underdog">Underdog</option> <option value="Unica One">Unica One</option> <option value="UnifrakturCook:700">UnifrakturCook:700</option> <option value="UnifrakturMaguntia">UnifrakturMaguntia</option> <option value="Unkempt">Unkempt</option> <option value="Unlock">Unlock</option> <option value="Unna">Unna</option> <option value="VT323">VT323</option> <option value="Vampiro One">Vampiro One</option> <option value="Varela">Varela</option> <option value="Varela Round">Varela Round</option> <option value="Vast Shadow">Vast Shadow</option> <option value="Vibur">Vibur</option> <option value="Vidaloka">Vidaloka</option> <option value="Viga">Viga</option> <option value="Voces">Voces</option> <option value="Volkhov">Volkhov</option> <option value="Vollkorn">Vollkorn</option> <option value="Voltaire">Voltaire</option> <option value="Waiting for the Sunrise">Waiting for the Sunrise</option> <option value="Wallpoet">Wallpoet</option> <option value="Walter Turncoat">Walter Turncoat</option> <option value="Warnes">Warnes</option> <option value="Wellfleet">Wellfleet</option> <option value="Wendy One">Wendy One</option> <option value="Wire One">Wire One</option> <option value="Yanone Kaffeesatz">Yanone Kaffeesatz</option> <option value="Yellowtail">Yellowtail</option> <option value="Yeseva One">Yeseva One</option> <option value="Yesteryear">Yesteryear</option> <option value="Zeyada">Zeyada</option>');
    $('#pfont').append('<option value="Abel">Abel</option> <option value="Abril Fatface">Abril Fatface</option> <option value="Aclonica">Aclonica</option> <option value="Acme">Acme</option> <option value="Actor">Actor</option> <option value="Adamina">Adamina</option> <option value="Advent Pro">Advent Pro</option> <option value="Aguafina Script">Aguafina Script</option> <option value="Akronim">Akronim</option> <option value="Aladin">Aladin</option> <option value="Aldrich">Aldrich</option> <option value="Alef">Alef</option> <option value="Alegreya">Alegreya</option> <option value="Alegreya SC">Alegreya SC</option> <option value="Alex Brush">Alex Brush</option> <option value="Alfa Slab One">Alfa Slab One</option> <option value="Alice">Alice</option> <option value="Alike">Alike</option> <option value="Alike Angular">Alike Angular</option> <option value="Allan">Allan</option> <option value="Allerta">Allerta</option> <option value="Allerta Stencil">Allerta Stencil</option> <option value="Allura">Allura</option> <option value="Almendra">Almendra</option> <option value="Almendra Display">Almendra Display</option> <option value="Almendra SC">Almendra SC</option> <option value="Amarante">Amarante</option> <option value="Amaranth">Amaranth</option> <option value="Amatic SC">Amatic SC</option> <option value="Amethysta">Amethysta</option> <option value="Anaheim">Anaheim</option> <option value="Andada">Andada</option> <option value="Andika">Andika</option> <option value="Angkor">Angkor</option> <option value="Annie Use Your Telescope">Annie Use Your Telescope</option> <option value="Anonymous Pro">Anonymous Pro</option> <option value="Antic">Antic</option> <option value="Antic Didone">Antic Didone</option> <option value="Antic Slab">Antic Slab</option> <option value="Anton">Anton</option> <option value="Arapey">Arapey</option> <option value="Arbutus">Arbutus</option> <option value="Arbutus Slab">Arbutus Slab</option> <option value="Architects Daughter">Architects Daughter</option> <option value="Archivo Black">Archivo Black</option> <option value="Archivo Narrow">Archivo Narrow</option> <option value="Arimo">Arimo</option> <option value="Arizonia">Arizonia</option> <option value="Armata">Armata</option> <option value="Artifika">Artifika</option> <option value="Arvo">Arvo</option> <option value="Asap">Asap</option> <option value="Asset">Asset</option> <option value="Astloch">Astloch</option> <option value="Asul">Asul</option> <option value="Atomic Age">Atomic Age</option> <option value="Aubrey">Aubrey</option> <option value="Audiowide">Audiowide</option> <option value="Autour One">Autour One</option> <option value="Average">Average</option> <option value="Average Sans">Average Sans</option> <option value="Averia Gruesa Libre">Averia Gruesa Libre</option> <option value="Averia Libre">Averia Libre</option> <option value="Averia Sans Libre">Averia Sans Libre</option> <option value="Averia Serif Libre">Averia Serif Libre</option> <option value="Bad Script">Bad Script</option> <option value="Balthazar">Balthazar</option> <option value="Bangers">Bangers</option> <option value="Basic">Basic</option> <option value="Battambang">Battambang</option> <option value="Baumans">Baumans</option> <option value="Bayon">Bayon</option> <option value="Belgrano">Belgrano</option> <option value="Belleza">Belleza</option> <option value="BenchNine">BenchNine</option> <option value="Bentham">Bentham</option> <option value="Berkshire Swash">Berkshire Swash</option> <option value="Bevan">Bevan</option> <option value="Bigelow Rules">Bigelow Rules</option> <option value="Bigshot One">Bigshot One</option> <option value="Bilbo">Bilbo</option> <option value="Bilbo Swash Caps">Bilbo Swash Caps</option> <option value="Bitter">Bitter</option> <option value="Black Ops One">Black Ops One</option> <option value="Bokor">Bokor</option> <option value="Bonbon">Bonbon</option> <option value="Boogaloo">Boogaloo</option> <option value="Bowlby One">Bowlby One</option> <option value="Bowlby One SC">Bowlby One SC</option> <option value="Brawler">Brawler</option> <option value="Bree Serif">Bree Serif</option> <option value="Bubblegum Sans">Bubblegum Sans</option> <option value="Bubbler One">Bubbler One</option> <option value="Buda:300">Buda:300</option> <option value="Buenard">Buenard</option> <option value="Butcherman">Butcherman</option> <option value="Butterfly Kids">Butterfly Kids</option> <option value="Cabin">Cabin</option> <option value="Cabin Condensed">Cabin Condensed</option> <option value="Cabin Sketch">Cabin Sketch</option> <option value="Caesar Dressing">Caesar Dressing</option> <option value="Cagliostro">Cagliostro</option> <option value="Calligraffitti">Calligraffitti</option> <option value="Cambo">Cambo</option> <option value="Candal">Candal</option> <option value="Cantarell">Cantarell</option> <option value="Cantata One">Cantata One</option> <option value="Cantora One">Cantora One</option> <option value="Capriola">Capriola</option> <option value="Cardo">Cardo</option> <option value="Carme">Carme</option> <option value="Carrois Gothic">Carrois Gothic</option> <option value="Carrois Gothic SC">Carrois Gothic SC</option> <option value="Carter One">Carter One</option> <option value="Caudex">Caudex</option> <option value="Cedarville Cursive">Cedarville Cursive</option> <option value="Ceviche One">Ceviche One</option> <option value="Changa One">Changa One</option> <option value="Chango">Chango</option> <option value="Chau Philomene One">Chau Philomene One</option> <option value="Chela One">Chela One</option> <option value="Chelsea Market">Chelsea Market</option> <option value="Chenla">Chenla</option> <option value="Cherry Cream Soda">Cherry Cream Soda</option> <option value="Cherry Swash">Cherry Swash</option> <option value="Chewy">Chewy</option> <option value="Chicle">Chicle</option> <option value="Chivo">Chivo</option> <option value="Cinzel">Cinzel</option> <option value="Cinzel Decorative">Cinzel Decorative</option> <option value="Clicker Script">Clicker Script</option> <option value="Coda">Coda</option> <option value="Coda Caption:800">Coda Caption:800</option> <option value="Codystar">Codystar</option> <option value="Combo">Combo</option> <option value="Comfortaa">Comfortaa</option> <option value="Coming Soon">Coming Soon</option> <option value="Concert One">Concert One</option> <option value="Condiment">Condiment</option> <option value="Content">Content</option> <option value="Contrail One">Contrail One</option> <option value="Convergence">Convergence</option> <option value="Cookie">Cookie</option> <option value="Copse">Copse</option> <option value="Corben">Corben</option> <option value="Courgette">Courgette</option> <option value="Cousine">Cousine</option> <option value="Coustard">Coustard</option> <option value="Covered By Your Grace">Covered By Your Grace</option> <option value="Crafty Girls">Crafty Girls</option> <option value="Creepster">Creepster</option> <option value="Crete Round">Crete Round</option> <option value="Crimson Text">Crimson Text</option> <option value="Croissant One">Croissant One</option> <option value="Crushed">Crushed</option> <option value="Cuprum">Cuprum</option> <option value="Cutive">Cutive</option> <option value="Cutive Mono">Cutive Mono</option> <option value="Damion">Damion</option> <option value="Dancing Script">Dancing Script</option> <option value="Dangrek">Dangrek</option> <option value="Dawning of a New Day">Dawning of a New Day</option> <option value="Days One">Days One</option> <option value="Delius">Delius</option> <option value="Delius Swash Caps">Delius Swash Caps</option> <option value="Delius Unicase">Delius Unicase</option> <option value="Della Respira">Della Respira</option> <option value="Denk One">Denk One</option> <option value="Devonshire">Devonshire</option> <option value="Didact Gothic">Didact Gothic</option> <option value="Diplomata">Diplomata</option> <option value="Diplomata SC">Diplomata SC</option> <option value="Domine">Domine</option> <option value="Donegal One">Donegal One</option> <option value="Doppio One">Doppio One</option> <option value="Dorsa">Dorsa</option> <option value="Dosis">Dosis</option> <option value="Dr Sugiyama">Dr Sugiyama</option> <option value="Droid Sans">Droid Sans</option> <option value="Droid Sans Mono">Droid Sans Mono</option> <option value="Droid Serif">Droid Serif</option> <option value="Duru Sans">Duru Sans</option> <option value="Dynalight">Dynalight</option> <option value="EB Garamond">EB Garamond</option> <option value="Eagle Lake">Eagle Lake</option> <option value="Eater">Eater</option> <option value="Economica">Economica</option> <option value="Electrolize">Electrolize</option> <option value="Elsie">Elsie</option> <option value="Elsie Swash Caps">Elsie Swash Caps</option> <option value="Emblema One">Emblema One</option> <option value="Emilys Candy">Emilys Candy</option> <option value="Engagement">Engagement</option> <option value="Englebert">Englebert</option> <option value="Enriqueta">Enriqueta</option> <option value="Erica One">Erica One</option> <option value="Esteban">Esteban</option> <option value="Euphoria Script">Euphoria Script</option> <option value="Ewert">Ewert</option> <option value="Exo">Exo</option> <option value="Expletus Sans">Expletus Sans</option> <option value="Fanwood Text">Fanwood Text</option> <option value="Fascinate">Fascinate</option> <option value="Fascinate Inline">Fascinate Inline</option> <option value="Faster One">Faster One</option> <option value="Fasthand">Fasthand</option> <option value="Fauna One">Fauna One</option> <option value="Federant">Federant</option> <option value="Federo">Federo</option> <option value="Felipa">Felipa</option> <option value="Fenix">Fenix</option> <option value="Finger Paint">Finger Paint</option> <option value="Fjalla One">Fjalla One</option> <option value="Fjord One">Fjord One</option> <option value="Flamenco">Flamenco</option> <option value="Flavors">Flavors</option> <option value="Fondamento">Fondamento</option> <option value="Fontdiner Swanky">Fontdiner Swanky</option> <option value="Forum">Forum</option> <option value="Francois One">Francois One</option> <option value="Freckle Face">Freckle Face</option> <option value="Fredericka the Great">Fredericka the Great</option> <option value="Fredoka One">Fredoka One</option> <option value="Freehand">Freehand</option> <option value="Fresca">Fresca</option> <option value="Frijole">Frijole</option> <option value="Fruktur">Fruktur</option> <option value="Fugaz One">Fugaz One</option> <option value="GFS Didot">GFS Didot</option> <option value="GFS Neohellenic">GFS Neohellenic</option> <option value="Gabriela">Gabriela</option> <option value="Gafata">Gafata</option> <option value="Galdeano">Galdeano</option> <option value="Galindo">Galindo</option> <option value="Gentium Basic">Gentium Basic</option> <option value="Gentium Book Basic">Gentium Book Basic</option> <option value="Geo">Geo</option> <option value="Geostar">Geostar</option> <option value="Geostar Fill">Geostar Fill</option> <option value="Germania One">Germania One</option> <option value="Gilda Display">Gilda Display</option> <option value="Give You Glory">Give You Glory</option> <option value="Glass Antiqua">Glass Antiqua</option> <option value="Glegoo">Glegoo</option> <option value="Gloria Hallelujah">Gloria Hallelujah</option> <option value="Goblin One">Goblin One</option> <option value="Gochi Hand">Gochi Hand</option> <option value="Gorditas">Gorditas</option> <option value="Goudy Bookletter 1911">Goudy Bookletter 1911</option> <option value="Graduate">Graduate</option> <option value="Grand Hotel">Grand Hotel</option> <option value="Gravitas One">Gravitas One</option> <option value="Great Vibes">Great Vibes</option> <option value="Griffy">Griffy</option> <option value="Gruppo">Gruppo</option> <option value="Gudea">Gudea</option> <option value="Habibi">Habibi</option> <option value="Hammersmith One">Hammersmith One</option> <option value="Hanalei">Hanalei</option> <option value="Hanalei Fill">Hanalei Fill</option> <option value="Handlee">Handlee</option> <option value="Hanuman">Hanuman</option> <option value="Happy Monkey">Happy Monkey</option> <option value="Headland One">Headland One</option> <option value="Henny Penny">Henny Penny</option> <option value="Herr Von Muellerhoff">Herr Von Muellerhoff</option> <option value="Holtwood One SC">Holtwood One SC</option> <option value="Homemade Apple">Homemade Apple</option> <option value="Homenaje">Homenaje</option> <option value="IM Fell DW Pica">IM Fell DW Pica</option> <option value="IM Fell DW Pica SC">IM Fell DW Pica SC</option> <option value="IM Fell Double Pica">IM Fell Double Pica</option> <option value="IM Fell Double Pica SC">IM Fell Double Pica SC</option> <option value="IM Fell English">IM Fell English</option> <option value="IM Fell English SC">IM Fell English SC</option> <option value="IM Fell French Canon">IM Fell French Canon</option> <option value="IM Fell French Canon SC">IM Fell French Canon SC</option> <option value="IM Fell Great Primer">IM Fell Great Primer</option> <option value="IM Fell Great Primer SC">IM Fell Great Primer SC</option> <option value="Iceberg">Iceberg</option> <option value="Iceland">Iceland</option> <option value="Imprima">Imprima</option> <option value="Inconsolata">Inconsolata</option> <option value="Inder">Inder</option> <option value="Indie Flower">Indie Flower</option> <option value="Inika">Inika</option> <option value="Irish Grover">Irish Grover</option> <option value="Istok Web">Istok Web</option> <option value="Italiana">Italiana</option> <option value="Italianno">Italianno</option> <option value="Jacques Francois">Jacques Francois</option> <option value="Jacques Francois Shadow">Jacques Francois Shadow</option> <option value="Jim Nightshade">Jim Nightshade</option> <option value="Jockey One">Jockey One</option> <option value="Jolly Lodger">Jolly Lodger</option> <option value="Josefin Sans">Josefin Sans</option> <option value="Josefin Slab">Josefin Slab</option> <option value="Joti One">Joti One</option> <option value="Judson">Judson</option> <option value="Julee">Julee</option> <option value="Julius Sans One">Julius Sans One</option> <option value="Junge">Junge</option> <option value="Jura">Jura</option> <option value="Just Another Hand">Just Another Hand</option> <option value="Just Me Again Down Here">Just Me Again Down Here</option> <option value="Kameron">Kameron</option> <option value="Karla">Karla</option> <option value="Kaushan Script">Kaushan Script</option> <option value="Kavoon">Kavoon</option> <option value="Keania One">Keania One</option> <option value="Kelly Slab">Kelly Slab</option> <option value="Kenia">Kenia</option> <option value="Khmer">Khmer</option> <option value="Kite One">Kite One</option> <option value="Knewave">Knewave</option> <option value="Kotta One">Kotta One</option> <option value="Koulen">Koulen</option> <option value="Kranky">Kranky</option> <option value="Kreon">Kreon</option> <option value="Kristi">Kristi</option> <option value="Krona One">Krona One</option> <option value="La Belle Aurore">La Belle Aurore</option> <option value="Lancelot">Lancelot</option> <option value="Lato">Lato</option> <option value="League Script">League Script</option> <option value="Leckerli One">Leckerli One</option> <option value="Ledger">Ledger</option> <option value="Lekton">Lekton</option> <option value="Lemon">Lemon</option> <option value="Libre Baskerville">Libre Baskerville</option> <option value="Life Savers">Life Savers</option> <option value="Lilita One">Lilita One</option> <option value="Lily Script One">Lily Script One</option> <option value="Limelight">Limelight</option> <option value="Linden Hill">Linden Hill</option> <option value="Lobster">Lobster</option> <option value="Lobster Two">Lobster Two</option> <option value="Londrina Outline">Londrina Outline</option> <option value="Londrina Shadow">Londrina Shadow</option> <option value="Londrina Sketch">Londrina Sketch</option> <option value="Londrina Solid">Londrina Solid</option> <option value="Lora">Lora</option> <option value="Love Ya Like A Sister">Love Ya Like A Sister</option> <option value="Loved by the King">Loved by the King</option> <option value="Lovers Quarrel">Lovers Quarrel</option> <option value="Luckiest Guy">Luckiest Guy</option> <option value="Lusitana">Lusitana</option> <option value="Lustria">Lustria</option> <option value="Macondo">Macondo</option> <option value="Macondo Swash Caps">Macondo Swash Caps</option> <option value="Magra">Magra</option> <option value="Maiden Orange">Maiden Orange</option> <option value="Mako">Mako</option> <option value="Marcellus">Marcellus</option> <option value="Marcellus SC">Marcellus SC</option> <option value="Marck Script">Marck Script</option> <option value="Margarine">Margarine</option> <option value="Marko One">Marko One</option> <option value="Marmelad">Marmelad</option> <option value="Marvel">Marvel</option> <option value="Mate">Mate</option> <option value="Mate SC">Mate SC</option> <option value="Maven Pro">Maven Pro</option> <option value="McLaren">McLaren</option> <option value="Meddon">Meddon</option> <option value="MedievalSharp">MedievalSharp</option> <option value="Medula One">Medula One</option> <option value="Megrim">Megrim</option> <option value="Meie Script">Meie Script</option> <option value="Merienda">Merienda</option> <option value="Merienda One">Merienda One</option> <option value="Merriweather">Merriweather</option> <option value="Merriweather Sans">Merriweather Sans</option> <option value="Metal">Metal</option> <option value="Metal Mania">Metal Mania</option> <option value="Metamorphous">Metamorphous</option> <option value="Metrophobic">Metrophobic</option> <option value="Michroma">Michroma</option> <option value="Milonga">Milonga</option> <option value="Miltonian">Miltonian</option> <option value="Miltonian Tattoo">Miltonian Tattoo</option> <option value="Miniver">Miniver</option> <option value="Miss Fajardose">Miss Fajardose</option> <option value="Modern Antiqua">Modern Antiqua</option> <option value="Molengo">Molengo</option> <option value="Molle:italic">Molle:italic</option> <option value="Monda">Monda</option> <option value="Monofett">Monofett</option> <option value="Monoton">Monoton</option> <option value="Monsieur La Doulaise">Monsieur La Doulaise</option> <option value="Montaga">Montaga</option> <option value="Montez">Montez</option> <option value="Montserrat">Montserrat</option> <option value="Montserrat Alternates">Montserrat Alternates</option> <option value="Montserrat Subrayada">Montserrat Subrayada</option> <option value="Moul">Moul</option> <option value="Moulpali">Moulpali</option> <option value="Mountains of Christmas">Mountains of Christmas</option> <option value="Mouse Memoirs">Mouse Memoirs</option> <option value="Mr Bedfort">Mr Bedfort</option> <option value="Mr Dafoe">Mr Dafoe</option> <option value="Mr De Haviland">Mr De Haviland</option> <option value="Mrs Saint Delafield">Mrs Saint Delafield</option> <option value="Mrs Sheppards">Mrs Sheppards</option> <option value="Muli">Muli</option> <option value="Mystery Quest">Mystery Quest</option> <option value="Neucha">Neucha</option> <option value="Neuton">Neuton</option> <option value="New Rocker">New Rocker</option> <option value="News Cycle">News Cycle</option> <option value="Niconne">Niconne</option> <option value="Nixie One">Nixie One</option> <option value="Nobile">Nobile</option> <option value="Nokora">Nokora</option> <option value="Norican">Norican</option> <option value="Nosifer">Nosifer</option> <option value="Nothing You Could Do">Nothing You Could Do</option> <option value="Noticia Text">Noticia Text</option> <option value="Noto Sans">Noto Sans</option> <option value="Noto Serif">Noto Serif</option> <option value="Nova Cut">Nova Cut</option> <option value="Nova Flat">Nova Flat</option> <option value="Nova Mono">Nova Mono</option> <option value="Nova Oval">Nova Oval</option> <option value="Nova Round">Nova Round</option> <option value="Nova Script">Nova Script</option> <option value="Nova Slim">Nova Slim</option> <option value="Nova Square">Nova Square</option> <option value="Numans">Numans</option> <option value="Nunito">Nunito</option> <option value="Odor Mean Chey">Odor Mean Chey</option> <option value="Offside">Offside</option> <option value="Old Standard TT">Old Standard TT</option> <option value="Oldenburg">Oldenburg</option> <option value="Oleo Script">Oleo Script</option> <option value="Oleo Script Swash Caps">Oleo Script Swash Caps</option> <option value="Open Sans">Open Sans</option> <option value="Open Sans Condensed:300">Open Sans Condensed:300</option> <option value="Open Sans Condensed:300italic">Open Sans Condensed:300italic</option> <option value="Open Sans Condensed:700">Open Sans Condensed:700</option> <option value="Oranienbaum">Oranienbaum</option> <option value="Orbitron">Orbitron</option> <option value="Oregano">Oregano</option> <option value="Orienta">Orienta</option> <option value="Original Surfer">Original Surfer</option> <option value="Oswald" selected="selected">Oswald</option> <option value="Over the Rainbow">Over the Rainbow</option> <option value="Overlock">Overlock</option> <option value="Overlock SC">Overlock SC</option> <option value="Ovo">Ovo</option> <option value="Oxygen">Oxygen</option> <option value="Oxygen Mono">Oxygen Mono</option> <option value="PT Mono">PT Mono</option> <option value="PT Sans">PT Sans</option> <option value="PT Sans Caption">PT Sans Caption</option> <option value="PT Sans Narrow">PT Sans Narrow</option> <option value="PT Serif">PT Serif</option> <option value="PT Serif Caption">PT Serif Caption</option> <option value="Pacifico">Pacifico</option> <option value="Paprika">Paprika</option> <option value="Parisienne">Parisienne</option> <option value="Passero One">Passero One</option> <option value="Passion One">Passion One</option> <option value="Pathway Gothic One">Pathway Gothic One</option> <option value="Patrick Hand">Patrick Hand</option> <option value="Patrick Hand SC">Patrick Hand SC</option> <option value="Patua One">Patua One</option> <option value="Paytone One">Paytone One</option> <option value="Peralta">Peralta</option> <option value="Permanent Marker">Permanent Marker</option> <option value="Petit Formal Script">Petit Formal Script</option> <option value="Petrona">Petrona</option> <option value="Philosopher">Philosopher</option> <option value="Piedra">Piedra</option> <option value="Pinyon Script">Pinyon Script</option> <option value="Pirata One">Pirata One</option> <option value="Plaster">Plaster</option> <option value="Play">Play</option> <option value="Playball">Playball</option> <option value="Playfair Display">Playfair Display</option> <option value="Playfair Display SC">Playfair Display SC</option> <option value="Podkova">Podkova</option> <option value="Poiret One">Poiret One</option> <option value="Poller One">Poller One</option> <option value="Poly">Poly</option> <option value="Pompiere">Pompiere</option> <option value="Pontano Sans">Pontano Sans</option> <option value="Port Lligat Sans">Port Lligat Sans</option> <option value="Port Lligat Slab">Port Lligat Slab</option> <option value="Prata">Prata</option> <option value="Preahvihear">Preahvihear</option> <option value="Press Start 2P">Press Start 2P</option> <option value="Princess Sofia">Princess Sofia</option> <option value="Prociono">Prociono</option> <option value="Prosto One">Prosto One</option> <option value="Puritan">Puritan</option> <option value="Purple Purse">Purple Purse</option> <option value="Quando">Quando</option> <option value="Quantico">Quantico</option> <option value="Quattrocento">Quattrocento</option> <option value="Quattrocento Sans">Quattrocento Sans</option> <option value="Questrial">Questrial</option> <option value="Quicksand">Quicksand</option> <option value="Quintessential">Quintessential</option> <option value="Qwigley">Qwigley</option> <option value="Racing Sans One">Racing Sans One</option> <option value="Radley">Radley</option> <option value="Raleway">Raleway</option> <option value="Raleway Dots">Raleway Dots</option> <option value="Rambla">Rambla</option> <option value="Rammetto One">Rammetto One</option> <option value="Ranchers">Ranchers</option> <option value="Rancho">Rancho</option> <option value="Rationale">Rationale</option> <option value="Redressed">Redressed</option> <option value="Reenie Beanie">Reenie Beanie</option> <option value="Revalia">Revalia</option> <option value="Ribeye">Ribeye</option> <option value="Ribeye Marrow">Ribeye Marrow</option> <option value="Righteous">Righteous</option> <option value="Risque">Risque</option> <option value="Roboto">Roboto</option> <option value="Roboto Condensed">Roboto Condensed</option> <option value="Roboto Slab">Roboto Slab</option> <option value="Rochester">Rochester</option> <option value="Rock Salt">Rock Salt</option> <option value="Rokkitt">Rokkitt</option> <option value="Romanesco">Romanesco</option> <option value="Ropa Sans">Ropa Sans</option> <option value="Rosario">Rosario</option> <option value="Rosarivo">Rosarivo</option> <option value="Rouge Script">Rouge Script</option> <option value="Ruda">Ruda</option> <option value="Rufina">Rufina</option> <option value="Ruge Boogie">Ruge Boogie</option> <option value="Ruluko">Ruluko</option> <option value="Rum Raisin">Rum Raisin</option> <option value="Ruslan Display">Ruslan Display</option> <option value="Russo One">Russo One</option> <option value="Ruthie">Ruthie</option> <option value="Rye">Rye</option> <option value="Sacramento">Sacramento</option> <option value="Sail">Sail</option> <option value="Salsa">Salsa</option> <option value="Sanchez">Sanchez</option> <option value="Sancreek">Sancreek</option> <option value="Sansita One">Sansita One</option> <option value="Sarina">Sarina</option> <option value="Satisfy">Satisfy</option> <option value="Scada">Scada</option> <option value="Schoolbell">Schoolbell</option> <option value="Seaweed Script">Seaweed Script</option> <option value="Sevillana">Sevillana</option> <option value="Seymour One">Seymour One</option> <option value="Shadows Into Light">Shadows Into Light</option> <option value="Shadows Into Light Two">Shadows Into Light Two</option> <option value="Shanti">Shanti</option> <option value="Share">Share</option> <option value="Share Tech">Share Tech</option> <option value="Share Tech Mono">Share Tech Mono</option> <option value="Shojumaru">Shojumaru</option> <option value="Short Stack">Short Stack</option> <option value="Siemreap">Siemreap</option> <option value="Sigmar One">Sigmar One</option> <option value="Signika">Signika</option> <option value="Signika Negative">Signika Negative</option> <option value="Simonetta">Simonetta</option> <option value="Sintony">Sintony</option> <option value="Sirin Stencil">Sirin Stencil</option> <option value="Six Caps">Six Caps</option> <option value="Skranji">Skranji</option> <option value="Slackey">Slackey</option> <option value="Smokum">Smokum</option> <option value="Smythe">Smythe</option> <option value="Sniglet:800">Sniglet:800</option> <option value="Snippet">Snippet</option> <option value="Snowburst One">Snowburst One</option> <option value="Sofadi One">Sofadi One</option> <option value="Sofia">Sofia</option> <option value="Sonsie One">Sonsie One</option> <option value="Sorts Mill Goudy">Sorts Mill Goudy</option> <option value="Source Code Pro">Source Code Pro</option> <option value="Source Sans Pro">Source Sans Pro</option> <option value="Special Elite">Special Elite</option> <option value="Spicy Rice">Spicy Rice</option> <option value="Spinnaker">Spinnaker</option> <option value="Spirax">Spirax</option> <option value="Squada One">Squada One</option> <option value="Stalemate">Stalemate</option> <option value="Stalinist One">Stalinist One</option> <option value="Stardos Stencil">Stardos Stencil</option> <option value="Stint Ultra Condensed">Stint Ultra Condensed</option> <option value="Stint Ultra Expanded">Stint Ultra Expanded</option> <option value="Stoke">Stoke</option> <option value="Strait">Strait</option> <option value="Sue Ellen Francisco">Sue Ellen Francisco</option> <option value="Sunshiney">Sunshiney</option> <option value="Supermercado One">Supermercado One</option> <option value="Suwannaphum">Suwannaphum</option> <option value="Swanky and Moo Moo">Swanky and Moo Moo</option> <option value="Syncopate">Syncopate</option> <option value="Tangerine">Tangerine</option> <option value="Taprom">Taprom</option> <option value="Tauri">Tauri</option> <option value="Telex">Telex</option> <option value="Tenor Sans">Tenor Sans</option> <option value="Text Me One">Text Me One</option> <option value="The Girl Next Door">The Girl Next Door</option> <option value="Tienne">Tienne</option> <option value="Tinos">Tinos</option> <option value="Titan One">Titan One</option> <option value="Titillium Web">Titillium Web</option> <option value="Trade Winds">Trade Winds</option> <option value="Trocchi">Trocchi</option> <option value="Trochut">Trochut</option> <option value="Trykker">Trykker</option> <option value="Tulpen One">Tulpen One</option> <option value="Ubuntu">Ubuntu</option> <option value="Ubuntu Condensed">Ubuntu Condensed</option> <option value="Ubuntu Mono">Ubuntu Mono</option> <option value="Ultra">Ultra</option> <option value="Uncial Antiqua">Uncial Antiqua</option> <option value="Underdog">Underdog</option> <option value="Unica One">Unica One</option> <option value="UnifrakturCook:700">UnifrakturCook:700</option> <option value="UnifrakturMaguntia">UnifrakturMaguntia</option> <option value="Unkempt">Unkempt</option> <option value="Unlock">Unlock</option> <option value="Unna">Unna</option> <option value="VT323">VT323</option> <option value="Vampiro One">Vampiro One</option> <option value="Varela">Varela</option> <option value="Varela Round">Varela Round</option> <option value="Vast Shadow">Vast Shadow</option> <option value="Vibur">Vibur</option> <option value="Vidaloka">Vidaloka</option> <option value="Viga">Viga</option> <option value="Voces">Voces</option> <option value="Volkhov">Volkhov</option> <option value="Vollkorn">Vollkorn</option> <option value="Voltaire">Voltaire</option> <option value="Waiting for the Sunrise">Waiting for the Sunrise</option> <option value="Wallpoet">Wallpoet</option> <option value="Walter Turncoat">Walter Turncoat</option> <option value="Warnes">Warnes</option> <option value="Wellfleet">Wellfleet</option> <option value="Wendy One">Wendy One</option> <option value="Wire One">Wire One</option> <option value="Yanone Kaffeesatz">Yanone Kaffeesatz</option> <option value="Yellowtail">Yellowtail</option> <option value="Yeseva One">Yeseva One</option> <option value="Yesteryear">Yesteryear</option> <option value="Zeyada">Zeyada</option>');
    $('#hfont').change(function () {
        var selectors = 'h1, h2, h3, h4, h5, h6, h1 a, h2 a, h3 a, h4 a, h5 a, h5 a, h6 a, ' +
            '.sf-menu a, .tbutton, .foot-menu, .event-timer ';
        var gFontVal = $("option:selected", this).val();
        var gFontName = gFontVal.split(':');
        if ($('head').find('link#gFontName').length < 1) {
            $('head').append('<link id="gFontName" rel="stylesheet" type="text/css" href="" />');
        }
        if ($('head').find('style#gFontStyles').length < 1) {
            $('head').append('<style id="gFontStyles" type="text/css"></style>');
        }
        $('link#gFontName').attr({href: 'http://fonts.googleapis.com/css?family=' + gFontVal});
        $('style#gFontStyles').html(selectors + ' { font-family:"' + gFontName[0] + '", sans-serif !important; }');
    });
    $('#pfont').change(function () {
        var selectorss = 'body, p, .sf-menu li a span, small';
        var pFontVal = $("option:selected", this).val();
        var pFontName = pFontVal.split(':');
        if ($('head').find('link#pFontName').length < 1) {
            $('head').append('<link id="pFontName" rel="stylesheet" type="text/css" href="" />');
        }
        if ($('head').find('style#pFontStyles').length < 1) {
            $('head').append('<style id="pFontStyles" type="text/css"></style>');
        }
        $('link#pFontName').attr({href: 'http://fonts.googleapis.com/css?family=' + pFontVal});
        $('style#pFontStyles').html(selectorss + ' { font-family:"' + pFontName[0] + '", sans-serif !important; }');
    });

    // C Scheme
    $('.style-picker #bgHeaderColor').parent('a').ColorPicker({
        onChange: function (hsb, hex, rgb) {
            $('.style-picker').find('#bgHeaderColor').css({backgroundColor: '#' + hex});
            $('style#themecolors').html('a:hover, .sf-menu li li:hover > a, .sf-menu li li > a:hover, #block_carousel .details a:hover, .wgr .details a:hover, .sf-menu li li.current_page_item > a, .sf-menu li li.current-menu-item > a,.sec_head .sf-menu li a:hover, .sf-menu > li:hover > a, .sf-menu > li > a:hover, .post_meta a:hover, .widget_archive li.current a, .widget_categories li.current a, .widget_nav_menu li.current a, .widget_meta li.current a, .widget_pages li.current a, .widget_archive li:hover a, .widget_pages li:hover a, .widget_meta li:hover a, .widget_nav_menu li:hover a, .widget_categories li:hover a, #footer .sf-menu a:hover, #footer .sf-menu .current-menu-item a, #footer .sf-menu .current_page_item a, #header .search button:hover, #footer a:hover, .r_post .more_meta a:hover, .r_post .s_category a:hover, .sf-menu li.current_page_item > a, .sf-menu li.current-menu-item > a, .medium_thumb .s_category a:hover { color: #' + hex + ' !important } .social a:hover .fa-random, .with_color a .fa-random, .social a:hover .fa-envelope-o, .with_color a .fa-envelope-o, .social a:hover .fa-home, .with_color a .fa-home, #ajax-login-content-tab input[type="submit"]:hover, #ajax-login-user a:hover, #ajax-recaptcha-container a:hover, #submit:hover, #wp-calendar #today, .tagcloud a:hover, .search_icon i:hover, .wp-pagenavi a, #footer #submit, #footer .search_btn, #footer .wpcf7-submit, .readmore:hover, .search_btn:hover, .wpcf7-submit:hover, .post-password-form input[type="submit"]:hover {background-color: #' + hex + ' !important} textarea:focus, input[type="text"]:focus, input[type="email"]:focus, input[type="url"]:focus, input[type="number"]:focus, input[type="password"]:focus, .widget_archive li.current a, .widget_categories li.current a, .widget_nav_menu li.current a, .widget_meta li.current a, .widget_pages li.current a, .widget_archive li:hover a, .widget_pages li:hover a, .widget_meta li:hover a, .widget_nav_menu li:hover a, .widget_categories li:hover a, #footer .widget_archive li a:hover, #footer .widget_pages li a:hover, #footer .widget_meta li a:hover, #footer .widget_recent_entries li:hover, #footer .widget_recent_comments li:hover, #footer .widget_rss li:hover, #footer .widget_nav_menu li a:hover, #footer .widget_categories li a:hover {border-color: #' + hex + ' !important} ::selection{background:#' + hex + ' !important} ::-moz-selection{background:#' + hex + ' !important} ');
            $('.colorss').html('<div class="colorss"><link rel="stylesheet" type="text/css" href="" media="screen"></div>');
        },
        onSubmit: function (hsb, hex, rgb, el) {
            $(el).find('#bgHeaderColor').css({backgroundColor: '#' + hex});
            $(el).find('#bgHeaderColor').attr({title: hex});
            $(el).ColorPickerHide();
        },
        onBeforeShow: function () {
            var hex = $('.style-picker').find('#bgHeaderColor').attr('title');
            $(this).ColorPickerSetColor(hex);
        }
    });

    // BG
    $('.style-picker #bgColor').parent('a').ColorPicker({
        onChange: function (hsb, hex, rgb) {
            $('.style-picker').find('#bgColor').css({backgroundColor: '#' + hex});
            $('body').css({'background': '#' + hex});
        },
        onSubmit: function (hsb, hex, rgb, el) {
            $(el).find('#bgColor').css({backgroundColor: '#' + hex});
            $(el).find('#bgColor').attr({title: hex});
            $('body').css({'background': '#' + hex});
            $(el).ColorPickerHide();
        },
        onBeforeShow: function () {
            var hex = $('.style-picker').find('#bgColor').attr('title');
            $(this).ColorPickerSetColor(hex);
        }
    });
    $('.style-picker a.bgBody').click(function () {
        var imgUrl = $(this).attr('rel');
        $('#layout').removeClass('full').addClass('boxed-margin');
        $('body').css({
            'background-image': "url('" + imgUrl + "')",
            "background-attachment": "fixed",
            "background-position": "top center",
            "-webkit-background-size": "initial",
            "-moz-background-size": "initial",
            "background-size": "initial",
            "background-repeat": "repeat"
        });
        return false;
    });
});
(function (e) {
    var t = function () {
        var t = {}, n, r = 65, i, s = '<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div></div>', o = {
            eventName: "click",
            onShow: function () {
            },
            onBeforeShow: function () {
            },
            onHide: function () {
            },
            onChange: function () {
            },
            onSubmit: function () {
            },
            color: "ff0000",
            livePreview: true,
            flat: false
        }, u = function (t, n) {
            var r = q(t);
            e(n).data("colorpicker").fields.eq(1).val(r.r).end().eq(2).val(r.g).end().eq(3).val(r.b).end()
        }, a = function (t, n) {
            e(n).data("colorpicker").fields.eq(4).val(t.h).end().eq(5).val(t.s).end().eq(6).val(t.b).end()
        }, f = function (t, n) {
            e(n).data("colorpicker").fields.eq(0).val(U(t)).end()
        }, l = function (t, n) {
            e(n).data("colorpicker").selector.css("backgroundColor", "#" + U({h: t.h, s: 100, b: 100}));
            e(n).data("colorpicker").selectorIndic.css({
                left: parseInt(150 * t.s / 100, 10),
                top: parseInt(150 * (100 - t.b) / 100, 10)
            })
        }, c = function (t, n) {
            e(n).data("colorpicker").hue.css("top", parseInt(150 - 150 * t.h / 360, 10))
        }, h = function (t, n) {
            e(n).data("colorpicker").currentColor.css("backgroundColor", "#" + U(t))
        }, p = function (t, n) {
            e(n).data("colorpicker").newColor.css("backgroundColor", "#" + U(t))
        }, d = function (t) {
            var n = t.charCode || t.keyCode || -1;
            if (n > r && n <= 90 || n == 32) {
                return false
            }
            var i = e(this).parent().parent();
            if (i.data("colorpicker").livePreview === true) {
                v.apply(this)
            }
        }, v = function (t) {
            var n = e(this).parent().parent(), r;
            if (this.parentNode.className.indexOf("_hex") > 0) {
                n.data("colorpicker").color = r = F(B(this.value))
            } else if (this.parentNode.className.indexOf("_hsb") > 0) {
                n.data("colorpicker").color = r = P({
                    h: parseInt(n.data("colorpicker").fields.eq(4).val(), 10),
                    s: parseInt(n.data("colorpicker").fields.eq(5).val(), 10),
                    b: parseInt(n.data("colorpicker").fields.eq(6).val(), 10)
                })
            } else {
                n.data("colorpicker").color = r = I(H({
                    r: parseInt(n.data("colorpicker").fields.eq(1).val(), 10),
                    g: parseInt(n.data("colorpicker").fields.eq(2).val(), 10),
                    b: parseInt(n.data("colorpicker").fields.eq(3).val(), 10)
                }))
            }
            if (t) {
                u(r, n.get(0));
                f(r, n.get(0));
                a(r, n.get(0))
            }
            l(r, n.get(0));
            c(r, n.get(0));
            p(r, n.get(0));
            n.data("colorpicker").onChange.apply(n, [r, U(r), q(r)])
        }, m = function (t) {
            var n = e(this).parent().parent();
            n.data("colorpicker").fields.parent().removeClass("colorpicker_focus")
        }, g = function () {
            r = this.parentNode.className.indexOf("_hex") > 0 ? 70 : 65;
            e(this).parent().parent().data("colorpicker").fields.parent().removeClass("colorpicker_focus");
            e(this).parent().addClass("colorpicker_focus")
        }, y = function (t) {
            var n = e(this).parent().find("input").focus();
            var r = {
                el: e(this).parent().addClass("colorpicker_slider"),
                max: this.parentNode.className.indexOf("_hsb_h") > 0 ? 360 : this.parentNode.className.indexOf("_hsb") > 0 ? 100 : 255,
                y: t.pageY,
                field: n,
                val: parseInt(n.val(), 10),
                preview: e(this).parent().parent().data("colorpicker").livePreview
            };
            e(document).bind("mouseup", r, w);
            e(document).bind("mousemove", r, b)
        }, b = function (e) {
            e.data.field.val(Math.max(0, Math.min(e.data.max, parseInt(e.data.val + e.pageY - e.data.y, 10))));
            if (e.data.preview) {
                v.apply(e.data.field.get(0), [true])
            }
            return false
        }, w = function (t) {
            v.apply(t.data.field.get(0), [true]);
            t.data.el.removeClass("colorpicker_slider").find("input").focus();
            e(document).unbind("mouseup", w);
            e(document).unbind("mousemove", b);
            return false
        }, E = function (t) {
            var n = {cal: e(this).parent(), y: e(this).offset().top};
            n.preview = n.cal.data("colorpicker").livePreview;
            e(document).bind("mouseup", n, x);
            e(document).bind("mousemove", n, S)
        }, S = function (e) {
            v.apply(e.data.cal.data("colorpicker").fields.eq(4).val(parseInt(360 * (150 - Math.max(0, Math.min(150, e.pageY - e.data.y))) / 150, 10)).get(0), [e.data.preview]);
            return false
        }, x = function (t) {
            u(t.data.cal.data("colorpicker").color, t.data.cal.get(0));
            f(t.data.cal.data("colorpicker").color, t.data.cal.get(0));
            e(document).unbind("mouseup", x);
            e(document).unbind("mousemove", S);
            return false
        }, T = function (t) {
            var n = {cal: e(this).parent(), pos: e(this).offset()};
            n.preview = n.cal.data("colorpicker").livePreview;
            e(document).bind("mouseup", n, C);
            e(document).bind("mousemove", n, N)
        }, N = function (e) {
            v.apply(e.data.cal.data("colorpicker").fields.eq(6).val(parseInt(100 * (150 - Math.max(0, Math.min(150, e.pageY - e.data.pos.top))) / 150, 10)).end().eq(5).val(parseInt(100 * Math.max(0, Math.min(150, e.pageX - e.data.pos.left)) / 150, 10)).get(0), [e.data.preview]);
            return false
        }, C = function (t) {
            u(t.data.cal.data("colorpicker").color, t.data.cal.get(0));
            f(t.data.cal.data("colorpicker").color, t.data.cal.get(0));
            e(document).unbind("mouseup", C);
            e(document).unbind("mousemove", N);
            return false
        }, k = function (t) {
            e(this).addClass("colorpicker_focus")
        }, L = function (t) {
            e(this).removeClass("colorpicker_focus")
        }, A = function (t) {
            var n = e(this).parent();
            var r = n.data("colorpicker").color;
            n.data("colorpicker").origColor = r;
            h(r, n.get(0));
            n.data("colorpicker").onSubmit(r, U(r), q(r), n.data("colorpicker").el)
        }, O = function (t) {
            var n = e("#" + e(this).data("colorpickerId"));
            n.data("colorpicker").onBeforeShow.apply(this, [n.get(0)]);
            var r = e(this).offset();
            var i = D();
            var s = r.top + this.offsetHeight;
            var o = r.left;
            if (s + 176 > i.t + i.h) {
                s -= this.offsetHeight + 176
            }
            if (o + 356 > i.l + i.w) {
                o -= 356
            }
            n.css({left: o + "px", top: s + "px"});
            if (n.data("colorpicker").onShow.apply(this, [n.get(0)]) != false) {
                n.show()
            }
            e(document).bind("mousedown", {cal: n}, M);
            return false
        }, M = function (t) {
            if (!_(t.data.cal.get(0), t.target, t.data.cal.get(0))) {
                if (t.data.cal.data("colorpicker").onHide.apply(this, [t.data.cal.get(0)]) != false) {
                    t.data.cal.hide()
                }
                e(document).unbind("mousedown", M)
            }
        }, _ = function (e, t, n) {
            if (e == t) {
                return true
            }
            if (e.contains) {
                return e.contains(t)
            }
            if (e.compareDocumentPosition) {
                return !!(e.compareDocumentPosition(t) & 16)
            }
            var r = t.parentNode;
            while (r && r != n) {
                if (r == e)return true;
                r = r.parentNode
            }
            return false
        }, D = function () {
            var e = document.compatMode == "CSS1Compat";
            return {
                l: window.pageXOffset || (e ? document.documentElement.scrollLeft : document.body.scrollLeft),
                t: window.pageYOffset || (e ? document.documentElement.scrollTop : document.body.scrollTop),
                w: window.innerWidth || (e ? document.documentElement.clientWidth : document.body.clientWidth),
                h: window.innerHeight || (e ? document.documentElement.clientHeight : document.body.clientHeight)
            }
        }, P = function (e) {
            return {
                h: Math.min(360, Math.max(0, e.h)),
                s: Math.min(100, Math.max(0, e.s)),
                b: Math.min(100, Math.max(0, e.b))
            }
        }, H = function (e) {
            return {
                r: Math.min(255, Math.max(0, e.r)),
                g: Math.min(255, Math.max(0, e.g)),
                b: Math.min(255, Math.max(0, e.b))
            }
        }, B = function (e) {
            var t = 6 - e.length;
            if (t > 0) {
                var n = [];
                for (var r = 0; r < t; r++) {
                    n.push("0")
                }
                n.push(e);
                e = n.join("")
            }
            return e
        }, j = function (e) {
            var e = parseInt(e.indexOf("#") > -1 ? e.substring(1) : e, 16);
            return {r: e >> 16, g: (e & 65280) >> 8, b: e & 255}
        }, F = function (e) {
            return I(j(e))
        }, I = function (e) {
            var t = {h: 0, s: 0, b: 0};
            var n = Math.min(e.r, e.g, e.b);
            var r = Math.max(e.r, e.g, e.b);
            var i = r - n;
            t.b = r;
            if (r != 0) {
            }
            t.s = r != 0 ? 255 * i / r : 0;
            if (t.s != 0) {
                if (e.r == r) {
                    t.h = (e.g - e.b) / i
                } else if (e.g == r) {
                    t.h = 2 + (e.b - e.r) / i
                } else {
                    t.h = 4 + (e.r - e.g) / i
                }
            } else {
                t.h = -1
            }
            t.h *= 60;
            if (t.h < 0) {
                t.h += 360
            }
            t.s *= 100 / 255;
            t.b *= 100 / 255;
            return t
        }, q = function (e) {
            var t = {};
            var n = Math.round(e.h);
            var r = Math.round(e.s * 255 / 100);
            var i = Math.round(e.b * 255 / 100);
            if (r == 0) {
                t.r = t.g = t.b = i
            } else {
                var s = i;
                var o = (255 - r) * i / 255;
                var u = (s - o) * (n % 60) / 60;
                if (n == 360)n = 0;
                if (n < 60) {
                    t.r = s;
                    t.b = o;
                    t.g = o + u
                } else if (n < 120) {
                    t.g = s;
                    t.b = o;
                    t.r = s - u
                } else if (n < 180) {
                    t.g = s;
                    t.r = o;
                    t.b = o + u
                } else if (n < 240) {
                    t.b = s;
                    t.r = o;
                    t.g = s - u
                } else if (n < 300) {
                    t.b = s;
                    t.g = o;
                    t.r = o + u
                } else if (n < 360) {
                    t.r = s;
                    t.g = o;
                    t.b = s - u
                } else {
                    t.r = 0;
                    t.g = 0;
                    t.b = 0
                }
            }
            return {r: Math.round(t.r), g: Math.round(t.g), b: Math.round(t.b)}
        }, R = function (t) {
            var n = [t.r.toString(16), t.g.toString(16), t.b.toString(16)];
            e.each(n, function (e, t) {
                if (t.length == 1) {
                    n[e] = "0" + t
                }
            });
            return n.join("")
        }, U = function (e) {
            return R(q(e))
        }, z = function () {
            var t = e(this).parent();
            var n = t.data("colorpicker").origColor;
            t.data("colorpicker").color = n;
            u(n, t.get(0));
            f(n, t.get(0));
            a(n, t.get(0));
            l(n, t.get(0));
            c(n, t.get(0));
            p(n, t.get(0))
        };
        return {
            init: function (t) {
                t = e.extend({}, o, t || {});
                if (typeof t.color == "string") {
                    t.color = F(t.color)
                } else if (t.color.r != undefined && t.color.g != undefined && t.color.b != undefined) {
                    t.color = I(t.color)
                } else if (t.color.h != undefined && t.color.s != undefined && t.color.b != undefined) {
                    t.color = P(t.color)
                } else {
                    return this
                }
                return this.each(function () {
                    if (!e(this).data("colorpickerId")) {
                        var n = e.extend({}, t);
                        n.origColor = t.color;
                        var r = "collorpicker_" + parseInt(Math.random() * 1e3);
                        e(this).data("colorpickerId", r);
                        var i = e(s).attr("id", r);
                        if (n.flat) {
                            i.appendTo(this).show()
                        } else {
                            i.appendTo(document.body)
                        }
                        n.fields = i.find("input").bind("keyup", d).bind("change", v).bind("blur", m).bind("focus", g);
                        i.find("span").bind("mousedown", y).end().find(">div.colorpicker_current_color").bind("click", z);
                        n.selector = i.find("div.colorpicker_color").bind("mousedown", T);
                        n.selectorIndic = n.selector.find("div div");
                        n.el = this;
                        n.hue = i.find("div.colorpicker_hue div");
                        i.find("div.colorpicker_hue").bind("mousedown", E);
                        n.newColor = i.find("div.colorpicker_new_color");
                        n.currentColor = i.find("div.colorpicker_current_color");
                        i.data("colorpicker", n);
                        i.find("div.colorpicker_submit").bind("mouseenter", k).bind("mouseleave", L).bind("click", A);
                        u(n.color, i.get(0));
                        a(n.color, i.get(0));
                        f(n.color, i.get(0));
                        c(n.color, i.get(0));
                        l(n.color, i.get(0));
                        h(n.color, i.get(0));
                        p(n.color, i.get(0));
                        if (n.flat) {
                            i.css({position: "relative", display: "block"})
                        } else {
                            e(this).bind(n.eventName, O)
                        }
                    }
                })
            }, showPicker: function () {
                return this.each(function () {
                    if (e(this).data("colorpickerId")) {
                        O.apply(this)
                    }
                })
            }, hidePicker: function () {
                return this.each(function () {
                    if (e(this).data("colorpickerId")) {
                        e("#" + e(this).data("colorpickerId")).hide()
                    }
                })
            }, setColor: function (t) {
                if (typeof t == "string") {
                    t = F(t)
                } else if (t.r != undefined && t.g != undefined && t.b != undefined) {
                    t = I(t)
                } else if (t.h != undefined && t.s != undefined && t.b != undefined) {
                    t = P(t)
                } else {
                    return this
                }
                return this.each(function () {
                    if (e(this).data("colorpickerId")) {
                        var n = e("#" + e(this).data("colorpickerId"));
                        n.data("colorpicker").color = t;
                        n.data("colorpicker").origColor = t;
                        u(t, n.get(0));
                        a(t, n.get(0));
                        f(t, n.get(0));
                        c(t, n.get(0));
                        l(t, n.get(0));
                        h(t, n.get(0));
                        p(t, n.get(0))
                    }
                })
            }
        }
    }();
    e.fn.extend({
        ColorPicker: t.init,
        ColorPickerHide: t.hidePicker,
        ColorPickerShow: t.showPicker,
        ColorPickerSetColor: t.setColor
    })
})(jQuery)