var initSlider = function( id, options ) {
    var that = this;

    this.currentImage = 0;
    this.imagesCount = options.images.length;
    this.sliderRoot = $( '#' + id );
    this.thumbnailWidth = 70;

    this.resetSliderInterval = function() {
        clearInterval( this.sliderInterval );
        this.sliderInterval = setInterval( function() {
            if ( that.currentImage >= that.imagesCount - 1 ) {
                that.currentImage = -1;
            }
            ++that.currentImage;

            that.slide();
        }, options.timeout );
    };


    this.setupRootElement = function() {
        that.sliderRoot.empty();
        that.sliderRoot.append( $( '<ul></ul>' ) );

        if ( that.imagesCount > 1 ) {
            that.sliderRoot.append( $( '<ul class="thumbnail_list"></ul>' ) );
            that.thumbnailUl = $( that.sliderRoot.children( 'ul' )[ 1 ] );
        }

        that.sliderUl = $( that.sliderRoot.children( 'ul' )[ 0 ] );
        var imageUrl, thumbnailUrl, lastDot, bigImageUrl, imageAlt;

        for ( var i = 0; i < that.imagesCount; ++i ) {
            imageAlt = options.images[ i ].alt;
            imageUrl = options.images[ i ].src;
            lastDot = imageUrl.lastIndexOf( '.' );
            thumbnailUrl = imageUrl.substr( 0, lastDot ) + '_thumb' + imageUrl.substr( lastDot );
            bigImageUrl = imageUrl.substr( 0, lastDot ) + '_big' + imageUrl.substr( lastDot );

            that.sliderUl.append( $( '<li></li>' ).append( $( '<img>' ).attr( { 'src': imageUrl, 'alt': imageAlt } ) ) );

            $( that.sliderUl.children( 'li' )[ i ] ).click( function() {
                that.setModal( $( this ).index() );
            } );

            if ( that.imagesCount > 1 ) {
                that.thumbnailUl.append( $( '<li></li>' ).append( $( '<img>' ).attr( 'src', thumbnailUrl ) ) );

                $( that.thumbnailUl.children( 'li' )[ i ] ).click( function() {
                    that.currentImage = $( this ).index();
                    that.slide();

                    that.resetSliderInterval();
                } );
            }
        }


        that.sliderUl.append( $( '<div></div>' ).attr( 'class', 'eof' ) );

        if ( that.imagesCount > 1 ) {
            $( that.thumbnailUl.children( 'li' )[ 0 ] ).addClass( 'active' );
            that.thumbnailUl.css( 'left', -1 * ( ( that.thumbnailWidth * that.imagesCount ) / 2 ) );

            that.thumbnailUl.append( $( '<div></div>' ).attr( 'class', 'eof' ) );
        }

        that.resetSliderInterval();
    }();

    this.sliderElement = this.sliderUl.children( 'li' );
    
    this.sliderElement.width( this.sliderRoot[ 0 ].offsetWidth );
    this.sliderUl.width( this.sliderElement[ 0 ].offsetWidth * this.imagesCount );

    this.slide = function() {
        if ( this.imagesCount > 1 ) {
            this.thumbnailUl.children( 'li' ).removeClass( 'active' );
            $( this.thumbnailUl.children( 'li' )[ this.currentImage ] ).addClass( 'active' );
        }

        $( this.sliderUl[ 0 ] ).animate( {
            left: -( this.currentImage * this.sliderRoot[ 0 ].offsetWidth )
        }, 500 );
    };

    this.setModal = function( index ) {
        var imageUrl = options.images[ index ].src;
        var lastDot = imageUrl.lastIndexOf( '.' );
        var bigImageUrl = imageUrl.substr( 0, lastDot ) + '_big' + imageUrl.substr( lastDot );

        $( '#modal' ).show();
        $( $( '#modal img' )[ 0 ] ).attr( 'src', bigImageUrl );
        $( '#modal div' ).css( 'top', ( ( $( '#modal' )[ 0 ].offsetHeight - $( '#modal > div' )[ 0 ].offsetHeight ) / 2 ) + 'px' );
    };

    $( '.close_modal' ).click( function(){
        $( '#modal' ).hide();
        return false;
    } );

    return this;
};
