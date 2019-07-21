//https://css-tricks.com/data-uris/

var icons = {
    lady: {
        glyph: "glyphicon-book",
        iconType: "bootstrapGlyphicon",
        toolTip: "Lady of the Lake"
    },

    ref: {
        glyph: "glyphicon-cloud",
        iconType: "bootstrapGlyphicon",
        toolTip: "Ref of the Rain"
    },

    sire: {
        glyph: "glyphicon-ice-lolly",
        iconType: "bootstrapGlyphicon",
        toolTip: "Sire of the Sea"
    },

    hammer: {
        // glyph: "glyphicon-ice-lolly",
        glyph: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDQ5NC4yMTIgNDk0LjIxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDk0LjIxMiA0OTQuMjEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQ4My42MjcsNDAxLjE0N0wzNzkuOTksMjk3LjUxMWMtNy40MTYtNy4wNDMtMTYuMDg0LTEwLjU2Ny0yNS45ODEtMTAuNTY3Yy0xMC4wODgsMC0xOS4yMjIsNC4wOTMtMjcuNDAxLDEyLjI3OCAgIGwtNzMuMDg3LTczLjA4N2wzNS45OC0zNS45NzZjMi42NjMtMi42NjcsMy45OTctNS45MDEsMy45OTctOS43MWMwLTMuODA2LTEuMzM0LTcuMDQyLTMuOTk3LTkuNzA3ICAgYzAuMzc3LDAuMzgxLDEuNTIsMS41NjksMy40MjMsMy41NzFjMS45MDIsMiwzLjE0MiwzLjE4OCwzLjcyLDMuNTcxYzAuNTcxLDAuMzc4LDEuNjYzLDEuMzI4LDMuMjc4LDIuODUzICAgYzEuNjI1LDEuNTIxLDIuOTAxLDIuNDc1LDMuODU2LDIuODUzYzAuOTU4LDAuMzc4LDIuMjQ1LDAuOTUsMy44NjcsMS43MTNjMS42MTUsMC43NjEsMy4xODMsMS4yODMsNC43MDksMS41NyAgIGMxLjUyMiwwLjI4NCwzLjIzNywwLjQyOCw1LjE0LDAuNDI4YzcuMjI4LDAsMTMuNzAzLTIuNjY1LDE5LjQxMS03Ljk5NWMwLjU3NC0wLjU3MSwyLjI4Ni0yLjE0LDUuMTQtNC43MTIgICBjMi44NjEtMi41NzQsNC44MDUtNC4zNzcsNS44NTUtNS40MjZjMS4wNDctMS4wNDcsMi42MjEtMi44MDYsNC43MTYtNS4yOGMyLjA5MS0yLjQ3NSwzLjU2OS00LjU3LDQuNDI1LTYuMjgzICAgYzAuODUzLTEuNzExLDEuNzA4LTMuODA2LDIuNTctNi4yOGMwLjg1NS0yLjQ3NCwxLjI3OS00Ljk0OSwxLjI3OS03LjQyM2MwLTcuNjE0LTIuNjY1LTE0LjA4Ny03Ljk5NC0xOS40MTdMMjM2LjQxLDguMDAzICAgYy01LjMzLTUuMzMtMTEuODAyLTcuOTk0LTE5LjQxMy03Ljk5NGMtMi40NzQsMC00Ljk0OCwwLjQyOC03LjQyNiwxLjI4M2MtMi40NzUsMC44NTQtNC41NjcsMS43MTMtNi4yOCwyLjU2OCAgIGMtMS43MTQsMC44NTUtMy44MDYsMi4zMzEtNi4yOCw0LjQyN2MtMi40NzQsMi4wOTQtNC4yMzMsMy42NjUtNS4yODIsNC43MTJjLTEuMDQ3LDEuMDQ5LTIuODU1LDMtNS40MjQsNS44NTIgICBjLTIuNTcyLDIuODU2LTQuMTQzLDQuNTctNC43MTIsNS4xNDJjLTUuMzI3LDUuNzA4LTcuOTk0LDEyLjE4MS03Ljk5NCwxOS40MTRjMCwxLjkwMywwLjE0NCwzLjYxNiwwLjQzMSw1LjEzNyAgIGMwLjI4OCwxLjUyNSwwLjgwOSwzLjA5NCwxLjU3MSw0LjcxNGMwLjc2LDEuNjE4LDEuMzMxLDIuOTAzLDEuNzEzLDMuODUzYzAuMzc4LDAuOTUsMS4zMjgsMi4yNCwyLjg1MiwzLjg1OCAgIGMxLjUyNSwxLjYxNSwyLjQ3NSwyLjcxMiwyLjg1NiwzLjI4NGMwLjM3OCwwLjU3NSwxLjU3MSwxLjgwOSwzLjU2NywzLjcxNWMyLDEuOTAyLDMuMTkzLDMuMDQ5LDMuNTcxLDMuNDI3ICAgYy0yLjY2NC0yLjY2Ny01LjkwMS0zLjk5OS05LjcwNy0zLjk5OXMtNy4wNDMsMS4zMzEtOS43MDcsMy45OTlsLTk5LjM3MSw5OS4zNTdjLTIuNjY3LDIuNjY2LTMuOTk5LDUuOTAxLTMuOTk5LDkuNzA3ICAgYzAsMy44MDksMS4zMzEsNy4wNDUsMy45OTksOS43MWMtMC4zODEtMC4zODEtMS41MjQtMS41NzQtMy40MjctMy41NzFjLTEuOTAyLTItMy4xNC0zLjE4OS0zLjcxMS0zLjU3MSAgIGMtMC41NzEtMC4zNzgtMS42NjUtMS4zMjgtMy4yODMtMi44NTJjLTEuNjE5LTEuNTIxLTIuOTA1LTIuNDc0LTMuODU1LTIuODUzYy0wLjk1LTAuMzc4LTIuMjM1LTAuOTUtMy44NTQtMS43MTQgICBjLTEuNjE1LTAuNzYtMy4xODYtMS4yODItNC43MS0xLjU2OWMtMS41MjEtMC4yODQtMy4yMzQtMC40MjgtNS4xMzctMC40MjhjLTcuMjMzLDAtMTMuNzA5LDIuNjY0LTE5LjQxNyw3Ljk5NCAgIGMtMC41NjgsMC41Ny0yLjI4NCwyLjE0NC01LjEzOCw0LjcxMmMtMi44NTYsMi41NzItNC44MDMsNC4zNzctNS44NTIsNS40MjZjLTEuMDQ3LDEuMDQ3LTIuNjE1LDIuODA2LTQuNzA5LDUuMjgxICAgYy0yLjA5MywyLjQ3NC0zLjU3MSw0LjU2OC00LjQyNiw2LjI4M2MtMC44NTYsMS43MDktMS43MDksMy44MDYtMi41NjgsNi4yOEMwLjQzMiwyMTIuMDYxLDAsMjE0LjUzNSwwLDIxNy4wMSAgIGMwLDcuNjE0LDIuNjY1LDE0LjA4Miw3Ljk5NCwxOS40MTRsMTE2LjQ4NSwxMTYuNDgxYzUuMzMsNS4zMjgsMTEuODAzLDcuOTkxLDE5LjQxNCw3Ljk5MWMyLjQ3NCwwLDQuOTQ4LTAuNDIyLDcuNDI2LTEuMjc3ICAgYzIuNDc1LTAuODU1LDQuNTY3LTEuNzE0LDYuMjgtMi41NjljMS43MTMtMC44NTUsMy44MDYtMi4zMjcsNi4yOC00LjQyNXM0LjIzMy0zLjY2NSw1LjI4LTQuNzE2ICAgYzEuMDQ5LTEuMDUxLDIuODU2LTIuOTk1LDUuNDI2LTUuODU1YzIuNTcyLTIuODUxLDQuMTQxLTQuNTY1LDQuNzEyLTUuMTRjNS4zMjctNS43MDksNy45OTQtMTIuMTg0LDcuOTk0LTE5LjQxMSAgIGMwLTEuOTAyLTAuMTQ0LTMuNjE3LTAuNDMxLTUuMTRjLTAuMjg4LTEuNTI2LTAuODA5LTMuMDk0LTEuNTcxLTQuNzE2Yy0wLjc2LTEuNjE1LTEuMzMxLTIuOTAyLTEuNzEzLTMuODU0ICAgYy0wLjM3OC0wLjk1MS0xLjMyOC0yLjIzOC0yLjg1Mi0zLjg2Yy0xLjUyNS0xLjYxNS0yLjQ3NS0yLjcxLTIuODU2LTMuMjg1Yy0wLjM4LTAuNTcxLTEuNTcxLTEuODA3LTMuNTY3LTMuNzE3ICAgYy0yLjAwMi0xLjkwMi0zLjE5My0zLjA0NS0zLjU3MS0zLjQyOWMyLjY2MywyLjY2OSw1LjkwMiw0LjAwMSw5LjcwNyw0LjAwMWMzLjgwNiwwLDcuMDQzLTEuMzMyLDkuNzA3LTQuMDAxbDM1Ljk3Ni0zNS45NzQgICBsNzMuMDg2LDczLjA4N2MtOC4xODYsOC4xODYtMTIuMjc4LDE3LjMxMi0xMi4yNzgsMjcuNDAxYzAsMTAuMjgzLDMuNjIxLDE4Ljg0MywxMC44NDksMjUuN0w0MDEuNDIsNDgzLjY0MyAgIGM3LjA0Miw3LjAzNSwxNS42MDQsMTAuNTYxLDI1LjY5MywxMC41NjFjOS44OTYsMCwxOC41NTUtMy41MjUsMjUuOTgxLTEwLjU2MWwzMC41NDYtMzAuODQxICAgYzcuMDQzLTcuMDQzLDEwLjU3MS0xNS42MDUsMTAuNTcxLTI1LjY5M0M0OTQuMjEyLDQxNy4yMzEsNDkwLjY4NCw0MDguNTY2LDQ4My42MjcsNDAxLjE0N3oiIGZpbGw9IiMwMDAwMDAiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K",
        iconType: "base64",
        toolTip: "Hammer",
        credit: '<div>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>',
        link: 'https://www.flaticon.com/free-icon/legal-hammer_25687'
    },

    "hammer-dark": {
        // glyph: "glyphicon-ice-lolly",
        glyph: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDQ5NC4yMTIgNDk0LjIxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDk0LjIxMiA0OTQuMjEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQ4My42MjcsNDAxLjE0N0wzNzkuOTksMjk3LjUxMWMtNy40MTYtNy4wNDMtMTYuMDg0LTEwLjU2Ny0yNS45ODEtMTAuNTY3Yy0xMC4wODgsMC0xOS4yMjIsNC4wOTMtMjcuNDAxLDEyLjI3OCAgIGwtNzMuMDg3LTczLjA4N2wzNS45OC0zNS45NzZjMi42NjMtMi42NjcsMy45OTctNS45MDEsMy45OTctOS43MWMwLTMuODA2LTEuMzM0LTcuMDQyLTMuOTk3LTkuNzA3ICAgYzAuMzc3LDAuMzgxLDEuNTIsMS41NjksMy40MjMsMy41NzFjMS45MDIsMiwzLjE0MiwzLjE4OCwzLjcyLDMuNTcxYzAuNTcxLDAuMzc4LDEuNjYzLDEuMzI4LDMuMjc4LDIuODUzICAgYzEuNjI1LDEuNTIxLDIuOTAxLDIuNDc1LDMuODU2LDIuODUzYzAuOTU4LDAuMzc4LDIuMjQ1LDAuOTUsMy44NjcsMS43MTNjMS42MTUsMC43NjEsMy4xODMsMS4yODMsNC43MDksMS41NyAgIGMxLjUyMiwwLjI4NCwzLjIzNywwLjQyOCw1LjE0LDAuNDI4YzcuMjI4LDAsMTMuNzAzLTIuNjY1LDE5LjQxMS03Ljk5NWMwLjU3NC0wLjU3MSwyLjI4Ni0yLjE0LDUuMTQtNC43MTIgICBjMi44NjEtMi41NzQsNC44MDUtNC4zNzcsNS44NTUtNS40MjZjMS4wNDctMS4wNDcsMi42MjEtMi44MDYsNC43MTYtNS4yOGMyLjA5MS0yLjQ3NSwzLjU2OS00LjU3LDQuNDI1LTYuMjgzICAgYzAuODUzLTEuNzExLDEuNzA4LTMuODA2LDIuNTctNi4yOGMwLjg1NS0yLjQ3NCwxLjI3OS00Ljk0OSwxLjI3OS03LjQyM2MwLTcuNjE0LTIuNjY1LTE0LjA4Ny03Ljk5NC0xOS40MTdMMjM2LjQxLDguMDAzICAgYy01LjMzLTUuMzMtMTEuODAyLTcuOTk0LTE5LjQxMy03Ljk5NGMtMi40NzQsMC00Ljk0OCwwLjQyOC03LjQyNiwxLjI4M2MtMi40NzUsMC44NTQtNC41NjcsMS43MTMtNi4yOCwyLjU2OCAgIGMtMS43MTQsMC44NTUtMy44MDYsMi4zMzEtNi4yOCw0LjQyN2MtMi40NzQsMi4wOTQtNC4yMzMsMy42NjUtNS4yODIsNC43MTJjLTEuMDQ3LDEuMDQ5LTIuODU1LDMtNS40MjQsNS44NTIgICBjLTIuNTcyLDIuODU2LTQuMTQzLDQuNTctNC43MTIsNS4xNDJjLTUuMzI3LDUuNzA4LTcuOTk0LDEyLjE4MS03Ljk5NCwxOS40MTRjMCwxLjkwMywwLjE0NCwzLjYxNiwwLjQzMSw1LjEzNyAgIGMwLjI4OCwxLjUyNSwwLjgwOSwzLjA5NCwxLjU3MSw0LjcxNGMwLjc2LDEuNjE4LDEuMzMxLDIuOTAzLDEuNzEzLDMuODUzYzAuMzc4LDAuOTUsMS4zMjgsMi4yNCwyLjg1MiwzLjg1OCAgIGMxLjUyNSwxLjYxNSwyLjQ3NSwyLjcxMiwyLjg1NiwzLjI4NGMwLjM3OCwwLjU3NSwxLjU3MSwxLjgwOSwzLjU2NywzLjcxNWMyLDEuOTAyLDMuMTkzLDMuMDQ5LDMuNTcxLDMuNDI3ICAgYy0yLjY2NC0yLjY2Ny01LjkwMS0zLjk5OS05LjcwNy0zLjk5OXMtNy4wNDMsMS4zMzEtOS43MDcsMy45OTlsLTk5LjM3MSw5OS4zNTdjLTIuNjY3LDIuNjY2LTMuOTk5LDUuOTAxLTMuOTk5LDkuNzA3ICAgYzAsMy44MDksMS4zMzEsNy4wNDUsMy45OTksOS43MWMtMC4zODEtMC4zODEtMS41MjQtMS41NzQtMy40MjctMy41NzFjLTEuOTAyLTItMy4xNC0zLjE4OS0zLjcxMS0zLjU3MSAgIGMtMC41NzEtMC4zNzgtMS42NjUtMS4zMjgtMy4yODMtMi44NTJjLTEuNjE5LTEuNTIxLTIuOTA1LTIuNDc0LTMuODU1LTIuODUzYy0wLjk1LTAuMzc4LTIuMjM1LTAuOTUtMy44NTQtMS43MTQgICBjLTEuNjE1LTAuNzYtMy4xODYtMS4yODItNC43MS0xLjU2OWMtMS41MjEtMC4yODQtMy4yMzQtMC40MjgtNS4xMzctMC40MjhjLTcuMjMzLDAtMTMuNzA5LDIuNjY0LTE5LjQxNyw3Ljk5NCAgIGMtMC41NjgsMC41Ny0yLjI4NCwyLjE0NC01LjEzOCw0LjcxMmMtMi44NTYsMi41NzItNC44MDMsNC4zNzctNS44NTIsNS40MjZjLTEuMDQ3LDEuMDQ3LTIuNjE1LDIuODA2LTQuNzA5LDUuMjgxICAgYy0yLjA5MywyLjQ3NC0zLjU3MSw0LjU2OC00LjQyNiw2LjI4M2MtMC44NTYsMS43MDktMS43MDksMy44MDYtMi41NjgsNi4yOEMwLjQzMiwyMTIuMDYxLDAsMjE0LjUzNSwwLDIxNy4wMSAgIGMwLDcuNjE0LDIuNjY1LDE0LjA4Miw3Ljk5NCwxOS40MTRsMTE2LjQ4NSwxMTYuNDgxYzUuMzMsNS4zMjgsMTEuODAzLDcuOTkxLDE5LjQxNCw3Ljk5MWMyLjQ3NCwwLDQuOTQ4LTAuNDIyLDcuNDI2LTEuMjc3ICAgYzIuNDc1LTAuODU1LDQuNTY3LTEuNzE0LDYuMjgtMi41NjljMS43MTMtMC44NTUsMy44MDYtMi4zMjcsNi4yOC00LjQyNXM0LjIzMy0zLjY2NSw1LjI4LTQuNzE2ICAgYzEuMDQ5LTEuMDUxLDIuODU2LTIuOTk1LDUuNDI2LTUuODU1YzIuNTcyLTIuODUxLDQuMTQxLTQuNTY1LDQuNzEyLTUuMTRjNS4zMjctNS43MDksNy45OTQtMTIuMTg0LDcuOTk0LTE5LjQxMSAgIGMwLTEuOTAyLTAuMTQ0LTMuNjE3LTAuNDMxLTUuMTRjLTAuMjg4LTEuNTI2LTAuODA5LTMuMDk0LTEuNTcxLTQuNzE2Yy0wLjc2LTEuNjE1LTEuMzMxLTIuOTAyLTEuNzEzLTMuODU0ICAgYy0wLjM3OC0wLjk1MS0xLjMyOC0yLjIzOC0yLjg1Mi0zLjg2Yy0xLjUyNS0xLjYxNS0yLjQ3NS0yLjcxLTIuODU2LTMuMjg1Yy0wLjM4LTAuNTcxLTEuNTcxLTEuODA3LTMuNTY3LTMuNzE3ICAgYy0yLjAwMi0xLjkwMi0zLjE5My0zLjA0NS0zLjU3MS0zLjQyOWMyLjY2MywyLjY2OSw1LjkwMiw0LjAwMSw5LjcwNyw0LjAwMWMzLjgwNiwwLDcuMDQzLTEuMzMyLDkuNzA3LTQuMDAxbDM1Ljk3Ni0zNS45NzQgICBsNzMuMDg2LDczLjA4N2MtOC4xODYsOC4xODYtMTIuMjc4LDE3LjMxMi0xMi4yNzgsMjcuNDAxYzAsMTAuMjgzLDMuNjIxLDE4Ljg0MywxMC44NDksMjUuN0w0MDEuNDIsNDgzLjY0MyAgIGM3LjA0Miw3LjAzNSwxNS42MDQsMTAuNTYxLDI1LjY5MywxMC41NjFjOS44OTYsMCwxOC41NTUtMy41MjUsMjUuOTgxLTEwLjU2MWwzMC41NDYtMzAuODQxICAgYzcuMDQzLTcuMDQzLDEwLjU3MS0xNS42MDUsMTAuNTcxLTI1LjY5M0M0OTQuMjEyLDQxNy4yMzEsNDkwLjY4NCw0MDguNTY2LDQ4My42MjcsNDAxLjE0N3oiIGZpbGw9IiNGRkZGRkYiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K",
        iconType: "base64",
        toolTip: "Hammer",
        credit: '<div>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>',
        link: 'https://www.flaticon.com/free-icon/legal-hammer_25687'
    },

    info: {
        glyph: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQzNy42IDQzNy42IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MzcuNiA0MzcuNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiPgo8Zz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBkPSJNMTk0LDE0Mi44YzAuOCwxLjYsMS42LDMuMiwyLjQsNC40YzAuOCwxLjIsMiwyLjQsMi44LDMuNmMxLjIsMS4yLDIuNCwyLjQsNCwzLjZjMS4yLDAuOCwyLjgsMiw0LjgsMi40ICAgICBjMS42LDAuOCwzLjIsMS4yLDUuMiwxLjZjMiwwLjQsMy42LDAuNCw1LjIsMC40YzEuNiwwLDMuNiwwLDUuMi0wLjRjMS42LTAuNCwzLjItMC44LDQuNC0xLjZoMC40YzEuNi0wLjgsMy4yLTEuNiw0LjgtMi44ICAgICBjMS4yLTAuOCwyLjQtMiwzLjYtMy4ybDAuNC0wLjRjMS4yLTEuMiwyLTIuNCwyLjgtMy42czEuNi0yLjQsMi00YzAtMC40LDAtMC40LDAuNC0wLjhjMC44LTEuNiwxLjItMy42LDEuNi01LjIgICAgIGMwLjQtMS42LDAuNC0zLjYsMC40LTUuMnMwLTMuNi0wLjQtNS4yYy0wLjQtMS42LTAuOC0zLjItMS42LTUuMmMtMS4yLTIuOC0yLjgtNS4yLTQuOC03LjJjLTAuNC0wLjQtMC40LTAuNC0wLjgtMC44ICAgICBjLTEuMi0xLjItMi40LTItNC0zLjJjLTEuNi0wLjgtMi44LTEuNi00LjQtMi40Yy0xLjYtMC44LTMuMi0xLjItNC44LTEuNmMtMi0wLjQtMy42LTAuNC01LjItMC40Yy0xLjYsMC0zLjYsMC01LjIsMC40ICAgICBjLTEuNiwwLjQtMy4yLDAuOC00LjgsMS42SDIwOGMtMS42LDAuOC0zLjIsMS42LTQuNCwyLjRjLTEuNiwxLjItMi44LDItNCwzLjJjLTEuMiwxLjItMi40LDIuNC0zLjIsMy42ICAgICBjLTAuOCwxLjItMS42LDIuOC0yLjQsNC40Yy0wLjgsMS42LTEuMiwzLjItMS42LDQuOGMtMC40LDItMC40LDMuNi0wLjQsNS4yYzAsMS42LDAsMy42LDAuNCw1LjIgICAgIEMxOTIuOCwxMzkuNiwxOTMuNiwxNDEuMiwxOTQsMTQyLjh6IiBmaWxsPSIjMDAwMDAwIi8+CgkJCTxwYXRoIGQ9Ik0yNDkuNiwyODkuMmgtOS4ydi05OGMwLTUuNi00LjQtMTAuNC0xMC40LTEwLjRoLTQyYy01LjYsMC0xMC40LDQuNC0xMC40LDEwLjR2MjEuNmMwLDUuNiw0LjQsMTAuNCwxMC40LDEwLjRoOC40djY2LjQgICAgIEgxODhjLTUuNiwwLTEwLjQsNC40LTEwLjQsMTAuNHYyMS42YzAsNS42LDQuNCwxMC40LDEwLjQsMTAuNGg2MS42YzUuNiwwLDEwLjQtNC40LDEwLjQtMTAuNFYzMDAgICAgIEMyNjAsMjk0LDI1NS4yLDI4OS4yLDI0OS42LDI4OS4yeiIgZmlsbD0iIzAwMDAwMCIvPgoJCQk8cGF0aCBkPSJNMjE4LjgsMEM5OCwwLDAsOTgsMCwyMTguOHM5OCwyMTguOCwyMTguOCwyMTguOHMyMTguOC05OCwyMTguOC0yMTguOFMzMzkuNiwwLDIxOC44LDB6IE0yMTguOCw0MDguOCAgICAgYy0xMDQuOCwwLTE5MC04NS4yLTE5MC0xOTBzODUuMi0xOTAsMTkwLTE5MHMxOTAsODUuMiwxOTAsMTkwUzMyMy42LDQwOC44LDIxOC44LDQwOC44eiIgZmlsbD0iIzAwMDAwMCIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K",
        iconType: "base64",
        toolTip: "Description",
        credit: '<div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>',
        link: 'https://www.flaticon.com/free-icon/information_685815'
    },

    infoDark: {
        glyph: "!!!!!!!!!!!!unused!!!!!!!!!!!!",
        iconType: "base64",
        toolTip: "Description",
        credit: '<div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>',
        link: 'https://www.flaticon.com/free-icon/information_685815'
    }
};

