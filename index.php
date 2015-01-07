<?php
    $page = isset( $_GET[ 'page' ] ) ? $_GET[ 'page' ] : false;
    $sub_page = isset( $_GET[ 'sub' ] ) ? $_GET[ 'sub' ] : '';

    if ( $page == '' ) {
        $page = 'home';
    }

    include 'layout/header.php';
    if ( $page ) {
        if ( ! $sub_page ) {
            $view = 'views/' . $page . '.php';
        }
        else {
            $view = 'views/' . $page . '/' . $sub_page . '.php';
        }

        if ( ! file_exists( $view ) ) {
            include 'views/404.html';
        }
        else {
            include $view;
        }
    }
    else {
        include 'views/404.html';
    }

    include 'layout/footer.php';
?>
