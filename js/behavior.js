$( document ).ready( function() {
    $( '.services' ).mouseover( function() {
        $( '.sub_menu' ).show();
    } );

    $( '#whitebar' ).mouseout( function( e ) {
        var isChildOfWhitebar = ( $( e.toElement ).parents( '#whitebar' ).length > 0 ) || $( e.toElement ).is( '#whitebar' );

        if ( ! isChildOfWhitebar ) {
            $( '.sub_menu' ).hide();
        }
    } );
} );
