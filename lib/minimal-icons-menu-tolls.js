'use babel';
import $ from 'jquery'
import MinimalIconsMenuTollsView from './minimal-icons-menu-tolls-view';
import { CompositeDisposable } from 'atom';

export default {
  activate(state) {
    atom.themes.onDidChangeActiveThemes(() => {
        $('.settings-view .config-menu .nav > li > a').html('')
      })
  }
};
