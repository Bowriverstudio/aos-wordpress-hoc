<?php
/**
 * Beans typography page installed after plugin activation.
 *
 * @package beans-typography
 * @author  Maurice Tadros
 * @license GPL-2.0-or-later
 * @link    https://www.bowriverstudio.com/
 */

return <<<CONTENT


<!-- wp:image {"height":300,"sizeSlug":"large","className":"figure-label figure float-left","aosData":"fade-up"} -->
<figure class="wp-block-image size-large is-resized figure-label figure float-left" data-aos="fade-up"><img src="https://loremflickr.com/320/240/dog/?random" alt="" height="300"/><figcaption>fade-up</figcaption></figure>
<!-- /wp:image -->

<!-- wp:spacer {"height":160} -->
<div style="height:160px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:image {"height":300,"sizeSlug":"large","className":"figure-label figure float-right","aosData":"fade-down"} -->
<figure class="wp-block-image size-large is-resized figure-label figure float-right" data-aos="fade-down"><img src="https://loremflickr.com/320/240/dog?random" alt="" height="300"/><figcaption>fade-down</figcaption></figure>
<!-- /wp:image -->
CONTENT;
