export default function NotFound() {
    window.location.href = 'https://www.desmg.com/error.php?code=404&msg=Not%20Found&url=' + encodeURIComponent(window.location.href);
    return null;
}
