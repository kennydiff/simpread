console.log( "==== simpread read setting load ====" )

import Modals, { getModalsBackground, isPopup } from 'modals';

/**
 * Setting Render
 */
function Render() {
    !isPopup() && ReactDOM.render( <Modals />, getModalsBackground( "html" ) );
}

module.exports.Render = Render;