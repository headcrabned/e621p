// ==UserScript==
// @name         e621 Slideshow button
// @namespace    e621p
// @version      1.0
// @description  Adds a "Slideshow" button under the e621 search box that opens the current search in e621p.
// @match        https://e621.net/*
// @match        https://e926.net/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict';

  const VIEWER = 'https://headcrabned.github.io/e621p/';

  // The sidebar search box: a <textarea name="tags"> in form.post-search-form
  // (older layouts used <input name="tags"> inside #search-box).
  const input =
    document.querySelector('form.post-search-form [name="tags"]') ||
    document.querySelector('#search-box [name="tags"]') ||
    document.querySelector('form[action="/posts"][method="get"] [name="tags"]');
  if (!input) return;
  const form = input.closest('form');
  if (!form || document.getElementById('e621p-slideshow')) return;
  const anchor = form.closest('section.post-search, #search-box') || form;

  // Current search: whatever is typed in the box, falling back to the page URL.
  function currentTags() {
    const typed = input.value.trim();
    if (typed) return typed;
    const p = new URLSearchParams(location.search);
    return (p.get('tags') || p.get('q') || '').trim();
  }

  function viewerUrl() {
    const tags = currentTags().split(/\s+/).filter(Boolean).join(' ');
    // URLSearchParams encodes spaces as "+", matching ?tags=a+b
    return tags ? VIEWER + '?' + new URLSearchParams({ tags }) : VIEWER;
  }

  const link = document.createElement('a');
  link.id = 'e621p-slideshow';
  link.textContent = '▶ Slideshow';
  link.target = '_blank';
  link.rel = 'noopener';
  link.href = viewerUrl();
  Object.assign(link.style, {
    display: 'block',
    margin: '6px 0',
    padding: '4px 8px',
    textAlign: 'center',
    borderRadius: '4px',
    background: '#fcb328',
    color: '#152f56',
    fontWeight: 'bold',
    textDecoration: 'none',
  });

  // Keep the href in sync with the box so edits count even before searching,
  // and so middle-click / copy-link get the right URL too.
  const refresh = () => { link.href = viewerUrl(); };
  input.addEventListener('input', refresh);
  link.addEventListener('mousedown', refresh);
  link.addEventListener('focus', refresh);

  anchor.insertAdjacentElement('afterend', link);
})();
