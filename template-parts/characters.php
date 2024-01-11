<?php
            $args = array(
                'post_type' => 'characters',
                'posts_per_page' => -1,
                'meta_key'  => '_main_char_field',
                'orderby'   => 'meta_value_num',

            );
            
            
            $characters_query = new WP_Query($args);
            ?>
        

            <article id="characters">
                <div class="main-character">
                <h3><span class="title characters__title hide">Les personnages</span></h3>

                
        <!-- Initialize the Swiper container for the characters list -->
                <div class="swiper-container">
        <!-- Wrapper for Swiper slides -->
                <div class="swiper-wrapper" style="display: flex;">
                <?php
                // Duplicate the characters list to allow infinite scrolling in Swiper
                $duplicated_characters = array_merge($characters_query->posts, $characters_query->posts);
                // Loop through the characters list
                foreach ($duplicated_characters as $post) :
                    // Set up data for the current post
                    setup_postdata($post);
                ?>
                    <!-- Individual slide in Swiper -->
                    <div class="swiper-slide" style="flex: 0 0 calc(100% / 3);">
                        <figure style="overflow: hidden;">
                            <!-- Display the featured image of the current post -->
                            <?php echo get_the_post_thumbnail(get_the_ID(), 'full', array('style' => 'height: 100%; object-fit: cover;')); ?>
                        </figure>
                        <figcaption>
                            <!-- Display the title of the current post -->
                            <?php the_title(); ?>
                        </figcaption>
                    </div>
                <?php
                // End the loop for characters
                endforeach;
                // Reset post data after the loop
                wp_reset_postdata();
                ?>
            </div>
            <!-- Swiper Pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</article>
