
[![Build Status](https://img.shields.io/travis/wuranium/simple-passport-acl.svg?style=flat)](https://travis-ci.org/wuranium/simple-passport-acl)
[![Maintainability](https://api.codeclimate.com/v1/badges/140d122182f773350d02/maintainability)](https://codeclimate.com/github/wuranium/simple-passport-acl/maintainability)
[![Join Gitter Chat](https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg?style=flat)](https://gitter.im/madhums/simple-passport-acl?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# Nodejs Simple Passport ACL Library

This is a secure permission middleware for PassportJS.

## Install

```sh
$ git clone git://github.com/wuranium/simple-passport-acl.git
$ npm install
```

## Usage

```js
route.use('/', _is(1), function(req,res) {
  /* .... */
});
```

## License

MIT
