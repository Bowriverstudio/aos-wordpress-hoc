<?php
/**
 * Beans typography page installed after plugin activation.
 *
 * @package beans-typography
 * @author  Maurice Tadros
 * @license GPL-2.0-or-later
 * @link    https://www.bowriverstudio.com/
 */
namespace aos\pattern\bootstrap;

class Aos_Demo
{

    public function getPattern()
    {
        return array(
            'title' => esc_html__('AOS Demo for bootstrap', 'tm-beans'),
            'key' => 'aos/' . explode('.', basename(__FILE__))[0], // Filename
            'content' => $this->getContent(),
        );
    }

    private function getContent()
    {

        $content = $this->getHeader('Fade');

        $images = array(
            array('title' => 'Fade up', 'data-aos' => 'fade-up', 'data-aos-easing' => 'ease-in-out-bounce'),
            array('title' => 'Fade down', 'data-aos' => 'fade-down'),
            array('title' => 'Fade right', 'data-aos' => 'fade-right'),
            array('title' => 'Fade left', 'data-aos' => 'fade-left'),
            array('title' => 'Fade up right', 'data-aos' => 'fade-up-right'),
            array('title' => 'Fade up left', 'data-aos' => 'fade-up-left'),
            array('title' => 'Fade down right', 'data-aos' => 'fade-down-right'),
            array('title' => 'Fade down left', 'data-aos' => 'fade-down-left'),
            array('title' => 'Fade ', 'data-aos' => 'fade-in'),
        );
        $content .= $this->getImages($images);

        $content .= $this->getHeader("Flip animations");
        $images = array(
            array('title' => 'Flip up', 'data-aos' => 'flip-up'),
            array('title' => 'Flip down', 'data-aos' => 'flip-down'),
            array('title' => 'Flip right', 'data-aos' => 'flip-right'),
            array('title' => 'Flip left', 'data-aos' => 'flip-left'),
        );
        $content .= $this->getImages($images);

        $content .= $this->getHeader("Slide animations");

        $images = array(
            array('title' => 'Slide up', 'data-aos' => 'slide-up'),
            array('title' => 'Slide down', 'data-aos' => 'slide-down'),
            array('title' => 'Slide right', 'data-aos' => 'slide-right'),
            array('title' => 'Slide left', 'data-aos' => 'slide-left'),
        );
        $content .= $this->getImages($images);

        $content .= $this->getHeader("Zoom animations");

        $images = array(
            array('title' => 'Zoom in', 'data-aos' => 'zoom-in'),
            array('title' => 'Zoom in up', 'data-aos' => 'zoom-in-up'),
            array('title' => 'Zoom in down', 'data-aos' => 'zoom-in-down'),
            array('title' => 'Zoom in right', 'data-aos' => 'zoom-in-right'),
            array('title' => 'Zoom in left', 'data-aos' => 'zoom-in-left'),
            array('title' => 'Zoom out', 'data-aos' => 'zoom-out'),
            array('title' => 'Zoom out up', 'data-aos' => 'zoom-out-up'),
            array('title' => 'Zoom out down', 'data-aos' => 'zoom-out-down'),
            array('title' => 'Zoom out right', 'data-aos' => 'zoom-out-right'),
            array('title' => 'Zoom out left', 'data-aos' => 'zoom-out-left'),
        );
        $content .= $this->getImages($images);

        $content .= $this->getHeader("Different setting examples");
        $images = array(
            array('title' => 'Flip up with duration', 'data-aos' => 'flip-up', 'data-aos-duration' => '3000'),
            array('title' => 'Flip down', 'data-aos' => 'flip-down',
                'data-aos-easing' => 'linear',
                'data-aos-duration' => '1500'),
            array('title' => 'Flip right ease in', 'data-aos' => 'flip-right', 'data-aos-offset' => '300', 'data-aos-easing' => '300'),
            array('title' => 'Zoom in fade', 'data-aos' => 'fade-zoom-in'),
        );
        $content .= $this->getImages($images);

        return $content;
    }

    private function getHeader($title)
    {
        return <<< CONTENT
		<!-- wp:heading {"align":"center"} -->
		<h2 class="has-text-align-center">$title</h2>
		<!-- /wp:heading -->
		CONTENT;
    }

    private function getSpacer()
    {
        return <<< CONTENT
		<!-- wp:spacer {"height":160} -->
		<div style="height:160px" aria-hidden="true" class="wp-block-spacer"></div>
		<!-- /wp:spacer -->
		CONTENT;
    }

    private function getImages($images)
    {
        $count = 0;
        $content = '';
        foreach ($images as $image) {
            $content .= $this->getImage($image, ($count % 2 == 1));
            $content .= $this->getSpacer();

            $count++;
        }
        return $content;
    }

    private function getImage($image, $isOdd)
    {
        $float_class = ($isOdd ? 'float-left' : 'float-right');
        $random = random_int(0, 1000);

        $query = http_build_query($image);
        $gutenberg = $this->getGutenbergAOSAttributes($image);
        $htmlAttrs = $this->getHTMLAtts($image);

        $content = '<!-- wp:image {"height":300,"sizeSlug":"large","className":"figure-label figure ' . $float_class . '",' . $gutenberg . '} -->';
        $content .= '<figure class="wp-block-image size-large is-resized figure-label figure ' . $float_class . '" ' . $htmlAttrs . '><img src="https://loremflickr.com/320/240/dog?' . $random . '" alt="" height="300"/><figcaption>' . $image['title'] . '</figcaption></figure>';
        $content .= '<!-- /wp:image -->';

        return $content;

    }

    private function getGutenbergAOSAttributes($image)
    {
        unset($image['title']);
        $attributes = array();
        foreach ($image as $key => $value) {
            $formatedKey = '';
            switch ($key) {
                case 'data-aos':
                    $formatedKey = 'aosData';
                    break;

                default:
                    //'data-aos-easing'
                    $formatedKey = 'aos' . ucfirst(str_replace('data-aos-', '', $key));
            }
            $attributes[$formatedKey] = $value;
        }

        $query = http_build_query($attributes);
        $gutenberg = str_replace('&', '","', $query);
        $gutenberg = str_replace('=', '":"', $gutenberg);
        $gutenberg = '"' . $gutenberg . '"';

        return $gutenberg;
    }

    private function getHTMLAtts($image)
    {
        unset($image['title']);

        $query = http_build_query($image);
        $atts = str_replace('&', '" ', $query);
        $atts = str_replace('=', '="', $atts) . '"';
        return $atts;
    }

}

$aos_Demo = new Aos_Demo();
return $aos_Demo->getPattern();
