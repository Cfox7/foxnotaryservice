// small runtime niceties: set current year
'use strict';
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
