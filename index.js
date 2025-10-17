const hiraganaDb = {
	'0': 'ぜろ',
	'1': 'いち',
	'2': 'に',
	'3': 'さん',
	'4': 'よん',
	'5': 'ご',
	'6': 'ろく',
	'7': 'なな',
	'8': 'はち',
	'9': 'きゅう',
	'a': 'えー',
	'b': 'びー',
	'c': 'しー',
	'd': 'でぃー',
	'e': 'いー',
	'f': 'えふ',
	'g': 'じー',
	'h': 'えいち',
	'i': 'あい',
	'j': 'じぇー',
	'k': 'けー',
	'l': 'える',
	'm': 'えむ',
	'n': 'えぬ',
	'o': 'おー',
	'p': 'ぴー',
	'q': 'きゅー',
	'r': 'あーる',
	's': 'えす',
	't': 'てぃー',
	'u': 'ゆー',
	'v': 'ぶい',
	'w': 'だぶりゅー',
	'x': 'えっくす',
	'y': 'わい',
	'z': 'ぜっと',
};
document.getElementById('submit').onclick = () => {
	const orig = document.getElementById('orig')
		.value
		.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
			return String.fromCharCode(
				s.charCodeAt(0) - 0xFEE0);
			})
		.toLowerCase()
		;
	let res = '';
	orig.split('').forEach(c => {
		res += ' ';
		if (typeof hiraganaDb[c] !== 'undefined') {
			res += hiraganaDb[c];
		} else {
			console.warn(`Character '${c}' not found in DB. Skipping it.`);
		}
	});

	document.getElementById('res').value = res.trim();
}
