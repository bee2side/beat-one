<?php include ('header_content.php'); ?>
<div id="main">
	<div id="content_content">
		<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
			<article class="single_article">
				<span class="single_article_title">
					<a href="<?php the_permalink(); ?>">
						<?php the_title(); ?>
					</a>
				</span>
				<div class="top_img_container"></div>
				<div class="single_article_content">
					<?php the_content(); ?>
				</div>
			</article>
		<?php endwhile; else: ?>
			<h2>Sorry!</h2>
		<?php endif; ?>
		<?php
			global $wp_query;
			$big = 999999999;
			echo paginate_links( array(
				'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
				'format' => '?paged=%#%',
				'current' => max( 1, get_query_var('paged') ),
				'total' => $wp_query->max_num_pages,
			) );
		?>
	</div>
    <div class="bottom_nev">
        <div class="bottom_next">
            <?php $nextPost = get_next_post(true);
        	if($nextPost) { ?>
			<?php $nextthumbnail = wp_get_attachment_image_src( get_post_thumbnail_id($nextPost->ID), 'full' ); ?>
			<div class="bottom_next_thumb" style="background-image: url('<?php echo $nextthumbnail['0']; ?>')">
			</div>
            <?php next_post_link('%link', "%title", true);} ?>
        </div>
        <div class="bottom_prev">
            <?php $prevPost = get_previous_post(true);
        	if($prevPost) { ?>
			<?php $prevthumbnail = wp_get_attachment_image_src( get_post_thumbnail_id($prevPost->ID), 'full' ); ?>
			<div class="bottom_prev_thumb" style="background-image: url('<?php echo $prevthumbnail['0']; ?>')">
			</div>
			<?php previous_post_link('%link', "%title", true);} ?>
        </div>
    </div>
<script>
	$(".single_article_content p:has(img)").addClass("img_container");
</script>
</div>
<?php get_footer(); ?>