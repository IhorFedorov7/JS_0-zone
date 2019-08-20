'use strict';

import getData from './modules/getData'
import renderCards from './modules/renderCards'
import renderCatalog from './modules/renderCatalog'
import toggleCart from './modules/toggleCart'
import toggleCheckBox from './modules/toggleCheckBox'
import addCart from './modules/addCart'
import actionPage from './modules/actionPage'

(async function() {
    const data = await getData();
    renderCards(data);
    renderCatalog();
    toggleCheckBox();
    toggleCart();
    addCart();
    actionPage();
})();


