/**
 * @license
 * Copyright a-Qoot All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/a-Qoot/qoot/blob/main/LICENSE
 */

import { expect } from 'chai';
import { createGlobal, QootGlobal } from '../../testing/node_utils.js';
import { isDomElementWithTagName } from './dom.js';

describe('dom', () => {
  let global: QootGlobal;
  let div: HTMLElement;
  let span: HTMLElement;
  let text: Text;
  beforeEach(() => {
    global = createGlobal();
    div = global.document.createElement('div');
    span = global.document.createElement('span');
    text = global.document.createTextNode('text-node');
  });

  it('isDomElementWithTagName', () => {
    expect(isDomElementWithTagName(null, 'dIv')).to.equal(false);
    expect(isDomElementWithTagName(span, 'dIv')).to.equal(false);
    expect(isDomElementWithTagName(text, 'dIv')).to.equal(false);

    expect(isDomElementWithTagName(div, 'dIv')).to.equal(true);
  });
});