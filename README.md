# Tommo
Mate

[![npm version](https://badge.fury.io/js/tommo.svg)](https://badge.fury.io/js/tommo)[![Build Status](https://travis-ci.org/danielmoi/tommo.svg?branch=master)](https://travis-ci.org/danielmoi/tommo)[![Coverage Status](https://coveralls.io/repos/github/danielmoi/tommo/badge.svg)](https://coveralls.io/github/danielmoi/tommo)

## Description
A versatile and lightweight library for doing stuff, mate.



## Basic Usage
```js
const tommo = require('tommo').default;

const normal = 'What a lovely day';
const better = tommo(normal);
// 'What a lovely day, mate'
```

## Advanced Usage
```js
const { loudMate, oldMate } = require('tommo');

const normal = 'What a dreary arvo';

const loud = loudMate(normal);
// 'What a dreary arvo, MATE'

const old = oldMate(normal);
// 'What a dreary arvo, old mate'
```

## Bonus Usage
```js
const { bonus } = require('tommo');

const someFella = 'Tommo';
const answer = bonus(someFella);

const ok = `Is ${someFella} Banana Man? ${answer}`;
// false, mate
```

## Git Usage
```js
const { meh } = require('meh');

const normalCommit = 'Remove .only';
const betterCommit = meh(normalCommit);
// 'Remove .only, meh...'

// TODO: Enable JS in bash


## Test
`tommo` uses [Ava](https://github.com/avajs/ava)

```js
yarn run test
```
