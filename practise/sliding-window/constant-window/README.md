- Given a constant window "k"
- Window is always of size "k", no shrinking logic

### Approach

- Take two pointers `l` & `r`
  - first compute the sum, by running a loop from `l` to `r (k-1)`
    - where `l` is the `0th index` and `r` is the `(k-1)th index`
