<?php
/*
Template Name: Интерактивная карта 
*/
get_header();
$cl = pll_current_language();
?>
<?php get_template_part('includes/breadcrumbs')?>
<div id="content_section">
    <div class="center_wrap">
        <div class="dt">
            <div class="dtc vat content_column">
                <h1 class="block_title big"><?php if(get_field('seo_h1')): the_field('seo_h1'); else: the_title(); endif;?></h1>
                <div class="page_content">
                    <p class="article_date"><?php the_field('page_date')?></p>
                    <?php if (have_posts()) : ?>
						<?php while (have_posts()) : the_post(); ?>
							<?php the_content(''); ?>
						<?php endwhile; ?>
					<?php else : ?>
						<h2 align="center">Не найдено</h2>
					<?php endif; ?>
                </div><!--/.page_content-->
                <div class="interactive_map_wrap">
					<iframe src="<?php bloginfo('template_url')?><?php if ($cl == 'ru'): echo '/interactive_iframe.html'; else: echo '/interactive_iframe.html'; endif;?>" width="100%" height="1100px"></iframe>
				</div>
                <div class="building_photos_block">
                    <p class="block_title no_border">Фотографии с места строительства</p>
                    <div class="custom_select">
                        <p class="custom_select_text">Выберите интересующую станцию метрополитена</p>
                        <div class="custom_select_list">
                            <ul>
                                <?php
									$photo_stations = get_field('photo_stations');
									if( $photo_stations ): 
										foreach( $photo_stations as $post):
											setup_postdata($post);
								?>
									<li><a href="<?php the_permalink();?>"><?php the_title()?></a></li>
								<?php 	endforeach; ?>
								<?php 	wp_reset_postdata(); // IMPORTANT - reset the $post object so the rest of the page works correctly ?>
								<?php endif; ?>
                            </ul>
                        </div>
                    </div>
                    <div class="building_photos">
                        <?php
							$photogalleries = get_field('photogalleries');
							if( $photogalleries ): 
								foreach( $photogalleries as $post):
									setup_postdata($post);
						?>
							<div class="building_photo_block">
								<div class="building_photo_block_img">
									<a class="fancybox" href="<?php the_permalink();?>">
										<?php the_post_thumbnail('photogallery-thumb')?>
									</a>
								</div>
								<p class="building_photo_block_title"><?php the_title()?></p>
							</div><!--/.building_photo_block-->
						<?php 	endforeach; ?>
						<?php 	wp_reset_postdata(); // IMPORTANT - reset the $post object so the rest of the page works correctly ?>
						<?php endif; ?>
                    </div><!--/.building_photos-->
					<p><a href="/photogallery/">Открыть все фотографии</a></p>
                </div><!--/.building_photos_block-->
                <div class="dop_articles">
                    <p class="block_title">Дополнительные статьи</p>
                    <p>Выберите интересующую статью:</p>
      <?php
		$parent_cats = get_the_category('6215'); //Получили список родительских категорий поста
		$first_level_parent_cat_id = -1; //Ищем ID родительской категории первого уровня
		$first_level_parent_cat_name = '';
		foreach($parent_cats as $parent_cat):
			if($parent_cat->parent == 0) {
				$first_level_parent_cat_id = $parent_cat->term_id;
				$first_level_parent_cat_name = $parent_cat->name;
			}
		endforeach;
	?>
	<p class="block_title <?echo $post->ID ?>"><?=$addArticles?></p>
	<p><?=$chooseArticle?></p>
	
	<div class="dop_article_blocks">
		<?php $current_post_id = $post->ID?>
		<?php query_posts('cat='.$first_level_parent_cat_id.'&posts_per_page=6&orderby=date&order=DESC'); ?>
		<?php while (have_posts()) : the_post(); ?>
			<?php if($post->ID != $current_post_id):?>
			<div class="dop_article_block <? echo 'cat='.$first_level_parent_cat_id.'&posts_per_page=6&orderby=date&order=DESC' ?>">
				<div class="dt">
					<div class="dtc vat dop_article_img">
						<a href="<?php the_permalink()?>">
							<?php the_post_thumbnail('mini-thumb')?>
						</a>
					</div>
					<div class="dtc vat dop_article_info">
						<p><a href="<?php the_permalink()?>"><?php the_title()?></a></p>
						<?php
						if ($cl == 'ru') {
							$date_str = get_the_time('j.n.Y',$popular_post->ID);
							$date_arr = explode('.', $date_str);
							$months = array(
								1 => 'января',
								2 => 'февраля',
								3 => 'марта',
								4 => 'апреля',
								5 => 'мая',
								6 => 'июня',
								7 => 'июля',
								8 => 'августа',
								9 => 'сентября',
								10 => 'октября',
								11 => 'ноября',
								12 => 'декабря',
							);
							$post_date = $date_arr[0] . ' ' . $months[$date_arr[1]] . ', ' . $date_arr[2];
						} else {
							$post_date = get_the_time('F j, Y');
						}	
						?>
						<p class="dop_article_date"><?php echo $post_date?></p>
					</div>
										</div><!--/.dt-->
									</div><!--/.dop_article_block-->
						<?php endif;?>
						<?php endwhile; ?>					
						<?php 	wp_reset_postdata(); // IMPORTANT - reset the $post object so the rest of the page works correctly ?>
                    </div><!--/.dop_article_blocks-->
                </div><!--/.dop_articles-->
                <?php get_template_part('includes/share_post')?>
				<?php //get_template_part('includes/comments_block')?>
            </div><!--/.dtc.content_column-->
            <?php get_sidebar();?>
        </div><!--/.dt-->
    </div><!--/.center_wrap-->
</div><!--/#content_section-->
<?php get_footer();?>