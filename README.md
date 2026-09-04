# Breads-Shared

> 🍞 Part of **[Breads](https://github.com/NguyenAnhDuc1711/Breads)** — start there for the architecture
> overview, screenshots and the other three repositories.

The contract every Breads service compiles against. Consumed as a **git submodule** at `src/Breads-Shared`
by [Breads-Be](https://github.com/NguyenAnhDuc1711/Breads-Be),
[Breads-Fe](https://github.com/NguyenAnhDuc1711/Breads-Fe) and
[Breads-Admin](https://github.com/NguyenAnhDuc1711/Breads-Admin).

## Why it exists

Three codebases talk to the same API. Left to themselves, each would keep its own copy of the route strings,
enums and payload shapes — and those copies drift. A renamed field then fails silently at runtime, in
production, in whichever app was not updated.

Putting the contract in one repository turns that class of bug into a compile error.

## Contents

| Path | What it holds |
|---|---|
| `APIConfig.ts` | `API_PREFIX`, every route segment and endpoint path, plus shared limits such as `SITEMAP_MAX_RECORDS` |
| `Types/` | DTO shapes — `User`, `Post`, `Message`, `Conversation`, `Notification`, `Media` |
| `Constants/` | Enums and constants for posts and pagination |
| `Auth/TokenManager.ts` | Token handling shared between client and server |
| `util/` | Helpers used on both sides of the wire |

Values that must agree across services live here even when only two of them read the value —
`SITEMAP_MAX_RECORDS`, for instance, is used by the backend to cap `totalCount` and by the frontend to stop
paginating, and the comment above it records *why* the cap is a hard number rather than a filter threshold.

## Usage

This repository is not published to npm. It is added as a submodule:

```bash
git submodule add https://github.com/NguyenAnhDuc1711/Breads-Shared.git src/Breads-Shared
```

Consumers clone with `--recurse-submodules` (or run `git submodule update --init --recursive`); without it
the directory is empty and the build fails.

Changing a shared type is a two-step change: commit here, then bump the submodule pointer in each consumer
that needs the new contract. That extra step is deliberate — it makes every service state explicitly which
version of the contract it is built against.
