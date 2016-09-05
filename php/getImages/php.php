<?php 

error_reporting(E_ERROR | E_PARSE);

// $html = file_get_contents('http://www.fantasyfootballscout.co.uk/team-news/');
// $dom = new domDocument;
// $dom->loadHTML($html);
// $dom->preserveWhiteSpace = false;
// $images = $dom->getElementsByTagName('item');

// $test = $dom->getElementsByTagName('h2');

// print_r($html);



// foreach ($images as $image) {
//     print_r($image->nodeValue);
// }

foreach($test as $value){
    if($value->getAttribute('class') == 'session_name()')
    print_r($value->nodeValue);
}


$url = 'http://www.fantasyfootballscout.co.uk/team-news/';
$content = file_get_contents($url);

$dom = new domDocument;
$dom->loadHTML($content);
$dom->preserveWhiteSpace = false;
$divs = $dom->getElementsByTagName('div');

print_r($divs);

?>