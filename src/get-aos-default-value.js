export default function( aosVariable ) {
	switch ( aosVariable ) {
		case 'mirror':
			return false;
		case 'once':
			return false;
	}

	return 'ERROR in AOS';
}
