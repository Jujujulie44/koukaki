<?php

get_header();
?>

    <main id="primary" class="site-main">
        <section class="banner">
            <div class="container-video">
                <video id="background-video" autoplay loop muted>
                    <source src="<?php echo get_stylesheet_directory_uri().'/assets/video_koukaki.mp4'; ?>" type="video/mp4">
                </video>
            </div>
            <img src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
            
        </section>
        <section id="#story" class="story">
            <h2>
                <span class="title-animation">L'</span>
                <span class="title-animation">histoire</span>
            </h2>
            <article id="" class="story__article">
                <p><?php echo get_theme_mod('story'); ?></p>
            </article>

            <!-- CHARATERES -->
           <?php get_template_part('template-parts/characters') ;?>


            <!--LIEU-->
            <article id="place" class="place_background">
                <div>
                    <img class="big_cloud" src="<?php echo get_stylesheet_directory_uri().'/assets/images/big_cloud.png'; ?>" alt="big_cloud" />
                    <img class="little_cloud" src="<?php echo get_stylesheet_directory_uri().'/assets/images/little_cloud.png'; ?>" alt="little_cloud" />
                    <h3>Le Lieu</h3>
                    <p><?php echo get_theme_mod('place'); ?></p>
                </div>

            </article>
        </section>


        <section id="studio">
            <h2><span class="title">Studio Koukaki</span></h2>
            <div>
                <p class="studio_paragraphe">Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p class="studio_paragraphe">Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
            </section>
    </main><!-- #main -->


<?php
get_footer();
