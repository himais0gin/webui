import { marker as T } from '@biesbjerg/ngx-translate-extract-marker';
import { UiSearchableElement } from 'app/interfaces/ui-searchable-element.interface';

export const elements: Record<string, UiSearchableElement> = {
  language: {
    hierarchy: [T('System Settings'), T('General'), T('Localization'), T('Language')],
    synonyms: [T('Translate App')],
    triggerAnchor: 'localization-settings',
    anchor: 'language-input',
    anchorRouterLink: ['/system', 'general'],
  },
};
