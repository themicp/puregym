<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' >
        <title>Pure Lifestyle Training - Γλυφάδα</title>
        <meta name='viewport' content='width=750, initial-scale=1'>
        <meta name='keywords' content='Pure, γυμναστηριο Γλυφαδα, γυμναστήρια Γλυφάδα, gym Glyfada, personal Glyfada, greek gym, personal, personal training Glyfada, personal training Γλυφαδα, personal training, gym'>
        <link rel='stylesheet' type='text/css' href='/style/style.css' />
        <link rel='stylesheet' href='/style/raleway.css'>
        <link href='/style/droid_sans.css' rel='stylesheet' type='text/css'>
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon'>
        <link rel='icon' href='/favicon.ico' type='image/x-icon'>
        <script src='https://code.jquery.com/jquery-1.11.0.min.js'></script>
        <script type='text/javascript' src='/js/behavior.js'></script>
        <script type='text/javascript' src='/js/slider.js'></script>
    </head>
    <body>
        <script>
          window.fbAsyncInit = function() {
            FB.init({
              appId      : '628473703941306',
              xfbml      : true,
              version    : 'v2.2'
            });
          };

          (function(d, s, id){
             var js, fjs = d.getElementsByTagName(s)[0];
             if (d.getElementById(id)) {return;}
             js = d.createElement(s); js.id = id;
             js.src = "//connect.facebook.net/en_US/sdk.js";
             fjs.parentNode.insertBefore(js, fjs);
           }(document, 'script', 'facebook-jssdk'));
        </script>
        <h1 id='main_title'>Pure Lifestyle Training - Γλυφάδα</h1>
        <div id='header'>
            <div id='whitebar'>
                <div>
                    <div class='logo'>
                        <img alt='P' src='/images/p.png' class='P' />
                        <img alt='Pure' src='/images/logo.png' />
                    </div>
                    <ul>
                        <li class='<?=$page == 'home' ? 'active' : '';?> underscore' ><a href='/'>Το γυμναστηριο</a></li>
                        <li class='<?=$page == 'place' ? 'active' : '';?> underscore' ><a href='/place'>Ο χωρος</a></li>
                        <li class='<?=$page == 'services' ? 'active' : '';?> underscore services' ><a href='#'>Οι υπηρεσιες</a>
                            <ul class='sub_menu' >
                                <li class='<?=$sub_page == 'powerplate' ? 'active' : '';?> first'><a href='/services/powerplate'>Power Plate</a></li>
                                <li class='<?=$sub_page == 'kinesis' ? 'active' : '';?>'><a href='/services/kinesis'>Kinesis</a></li>
                                <li class='<?=$sub_page == 'trx' ? 'active' : '';?>'><a href='/services/trx'>TRX Training</a></li>
                                <li class='<?=$sub_page == 'pilates' ? 'active' : '';?>'><a href='/services/pilates'>Pilates</a></li>
                                <li class='<?=$sub_page == 'programs' ? 'active' : '';?> last'><a href='/services/programs'>Προγράμματα</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div id='modal'>
            <div>
                <img src='' class='main_image' />
                <img src='/images/close-icon.png' class='close_modal' />
            </div>
        </div>
