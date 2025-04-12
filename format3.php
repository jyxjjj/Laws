<?php

function sha512($data)
{
    return strtoupper(hash('sha512', $data));
}

$text = file_get_contents('original/销售服务、无形资产、不动产注释.txt');

$text = explode("\n", $text);
$newText = [];
$hashes = [];
foreach ($text as $item) {
    if (!$item) {
        continue;
    }
    $isZhang = preg_match('/^([一二三])、(.+)$/u', $item, $matches);
    if ($isZhang) {
        $hash = substr(sha512($item), 0, 8);
        $hashes[] = "<Typography><IDLink onClick={routeTo('$hash')}>$item</IDLink></Typography>";
        $newText[] = "<Typography id='$hash' variant='title4'>$matches[1]、$matches[2]</Typography>";
        continue;
    }
    $isJie = preg_match('/^(\([一二三四五六七八九]\))(.+服务)。$/u', $item, $matches);
    if ($isJie) {
        $hash = substr(sha512($matches[1] . $matches[2]), 0, 8);
        $hashes[] = "<Typography><IDLink onClick={routeTo('$hash')}>$matches[1]$matches[2]</IDLink></Typography>";
        $newText[] = "<Typography id='$hash' variant='title5'>$matches[1]$matches[2]。</Typography>";
        continue;
    }
    $isTiao = preg_match('/^(\d\.)(.+)$/u', $item, $matches);
    if ($isTiao) {
        $newText[] = "<Typography variant='content1'>$matches[1]$matches[2]</Typography>";
        continue;
    }
    $newText[] = "<Typography variant='content2'>$item</Typography>";
}
$newText = implode("\n", $newText);
echo $newText;

exec("echo \"$newText\" | pbcopy");

$hashes = implode("\n", $hashes);
echo "\n$hashes\n";
