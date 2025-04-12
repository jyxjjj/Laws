<?php

function sha512($data)
{
    return strtoupper(hash('sha512', $data));
}

$text = file_get_contents('original/民诉法.txt');

$text = explode("\n", $text);
$newText = [];
$hashes = [];
foreach ($text as $item) {
    if(!$item) {
        continue;
    }
    $isBian = preg_match('/^第(.+)编 (.+)$/u', $item, $matches);
    if ($isBian) {
        $hash = substr(sha512($item), 0, 8);
        $hashes[] = "<Typography><IDLink onClick={routeTo('$hash')}>$item</IDLink></Typography>";
        $newText[] = "<Typography id='$hash' variant='title4'>第$matches[1]编 $matches[2]</Typography>";
        continue;
    }
    $isFenBian = preg_match('/^第(.+)分编 (.+)$/u', $item, $matches);
    if ($isFenBian) {
        $hash = substr(sha512($item), 0, 8);
        $hashes[] = "<Typography><IDLink onClick={routeTo('$hash')}>$item</IDLink></Typography>";
        $newText[] = "<Typography id='$hash' variant='title4'>第$matches[1]分编 $matches[2]</Typography>";
        continue;
    }
    $isXuyan = preg_match('/^(序言|附则)$/u', $item, $matches);
    if ($isXuyan) {
        $hash = substr(sha512($item), 0, 8);
        $hashes[] = "<Typography><IDLink onClick={routeTo('$hash')}>$item</IDLink></Typography>";
        $newText[] = "<Typography id='$hash' variant='title5'>$item</Typography>";
        continue;
    }
    $isZhang = preg_match('/^第(.+)章 (.+)$/u', $item, $matches);
    if ($isZhang) {
        $hash = substr(sha512($item), 0, 8);
        $hashes[] = "<Typography><IDLink onClick={routeTo('$hash')}>$item</IDLink></Typography>";
        $newText[] = "<Typography id='$hash' variant='title6'>第$matches[1]章 $matches[2]</Typography>";
        continue;
    }
    $isJie = preg_match('/^第(.+)节 (.+)$/u', $item, $matches);
    if ($isJie) {
        $hash = substr(sha512($item), 0, 8);
        $hashes[] = "<Typography><IDLink onClick={routeTo('$hash')}>$item</IDLink></Typography>";
        $newText[] = "<Typography id='$hash' variant='title6'>第$matches[1]节 $matches[2]</Typography>";
        continue;
    }
    $isTiao = preg_match('/^第(.+)条 (.+)$/u', $item, $matches);
    if ($isTiao) {
        $newText[] = "<Typography variant='content1'>第$matches[1]条</Typography>";
        $newText[] = "<Typography variant='content2'>$matches[2]</Typography>";
        continue;
    }
    $newText[] = "<Typography variant='content2'>$item</Typography>";
}
$newText = implode("\n", $newText);
echo $newText;

exec("echo \"$newText\" | pbcopy");

$hashes = implode("\n", $hashes);
echo "\n$hashes\n";
