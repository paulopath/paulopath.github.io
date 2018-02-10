---
title: Page Layout Architecture
---

_Tachyons Page Template_
```pug

.cf
  .fl.w-100.w-25-l.pl3-l.mb3.mb4-l
    .cover.pv5.pv6-m.pv7-l(style='background:black url(http://mrmrs.github.io/photos/051.jpg) center;')  
  .fl.w-100.w-25-l.pr3-l
    p.lh-copy.measure.f6.pt3.pt0-l.mt0.mb3.mb4-l.center
      span.fw6 For us Graphic Design is “organization of information.”

```


_clear-fix_
```css

/* Nicolas Gallaghers Clearfix solution
   Ref: http://nicolasgallagher.com/micro-clearfix-hack/ */
.cf:before, .cf:after { content: " "; display: table; }
.cf:after { clear: both; }
.cf { *zoom: 1; }
.cl { clear: left; }
.cr { clear: right; }
.cb { clear: both; }
.cn { clear: none; }
@media screen and (min-width: 30em) {
 .cl-ns { clear: left; }
 .cr-ns { clear: right; }
 .cb-ns { clear: both; }
 .cn-ns { clear: none; }
}
@media screen and (min-width: 30em) and (max-width: 60em) {
 .cl-m { clear: left; }
 .cr-m { clear: right; }
 .cb-m { clear: both; }
 .cn-m { clear: none; }
}
@media screen and (min-width: 60em) {
 .cl-l { clear: left; }
 .cr-l { clear: right; }
 .cb-l { clear: both; }
 .cn-l { clear: none; }
}

```

_floats_
```css

.fl { float: left; _display: inline; }
.fr { float: right; _display: inline; }
.fn { float: none; }
@media screen and (min-width: 30em) {
 .fl-ns { float: left; display: inline; }
 .fr-ns { float: right; display: inline; }
 .fn-ns { float: none; }
}
@media screen and (min-width: 30em) and (max-width: 60em) {
 .fl-m { float: left; display: inline; }
 .fr-m { float: right; display: inline; }
 .fn-m { float: none; }
}
@media screen and (min-width: 60em) {
 .fl-l { float: left; display: inline; }
 .fr-l { float: right; display: inline; }
 .fn-l { float: none; }
}

```


## Refs
[tachyons-page-template](http://tachyons.io/components/pages/double/index.html)