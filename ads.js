/**
 * =============================================
 *  ADS LOADER - File Terpisah untuk Iklan
 * =============================================
 *  Semua script iklan dikelola di sini supaya
 *  rapi dan mudah ditambah/dihapus nantinya.
 *
 *  CARA MENAMBAH IKLAN BARU:
 *  - Popunder : tambahkan URL ke array POPUNDER_SCRIPTS
 *  - Social Bar: tambahkan URL ke array SOCIALBAR_SCRIPTS
 *  - Banner   : dikelola via loadStandardBanner()
 *  - Native   : dikelola via loadNativeBanner()
 * =============================================
 */

(function () {
    'use strict';

    // ==========================================
    //  DAFTAR SCRIPT POPUNDER
    //  (Tambahkan URL baru di bawah ini)
    // ==========================================
    const POPUNDER_SCRIPTS = [
        'https://pl28946629.profitablecpmratenetwork.com/bc/e5/8a/bce58a34701d8b857c88e5fb05575e4e.js'
        // Tambahkan popunder baru di sini:
        // 'https://example.com/popunder3.js',
        // 'https://example.com/popunder4.js',
    ];

    // ==========================================
    //  DAFTAR SCRIPT SOCIAL BAR
    //  (Tambahkan URL baru di bawah ini)
    // ==========================================
    const SOCIALBAR_SCRIPTS = [
        'https://pl28946639.profitablecpmratenetwork.com/86/c4/23/86c42358e69bcb4bad3d034e781528a8.js'
        // Tambahkan social bar baru di sini:
        // 'https://example.com/socialbar2.js',
    ];

    // ==========================================
    //  FUNGSI PEMUAT SCRIPT
    //  Memuat semua script dari array secara async
    // ==========================================
    function loadScripts(scriptUrls) {
        scriptUrls.forEach(function (url) {
            if (!url || url.trim() === '') return;
            var s = document.createElement('script');
            s.src = url;
            s.async = true;
            s.setAttribute('data-cfasync', 'false');
            document.body.appendChild(s);
        });
    }

    // ==========================================
    //  FUNGSI PEMUAT NATIVE BANNER
    // ==========================================
    function loadNativeBanner() {
        var container = document.createElement('div');
        container.id = 'container-50e96cbac34d6f9a70958483ba374c0d';
        document.body.appendChild(container);

        var s = document.createElement('script');
        s.src = 'https://pl28946649.profitablecpmratenetwork.com/50e96cbac34d6f9a70958483ba374c0d/invoke.js';
        s.async = true;
        s.setAttribute('data-cfasync', 'false');
        document.body.appendChild(s);
    }

    // ==========================================
    //  FUNGSI PEMUAT BANNER 300x250
    // ==========================================
    function loadStandardBanner() {
        window.atOptions = {
            'key' : '7f9817d973c9f2d3111434192e5ac030',
            'format' : 'iframe',
            'height' : 250,
            'width' : 300,
            'params' : {}
        };
        
        var s = document.createElement('script');
        s.src = 'https://www.highperformanceformat.com/7f9817d973c9f2d3111434192e5ac030/invoke.js';
        document.body.appendChild(s);
    }

    // Muat semua iklan setelah halaman selesai load
    // agar tidak menghambat render utama
    if (document.readyState === 'complete') {
        loadScripts(POPUNDER_SCRIPTS);
        loadScripts(SOCIALBAR_SCRIPTS);
        loadNativeBanner();
        loadStandardBanner();
    } else {
        window.addEventListener('load', function () {
            loadScripts(POPUNDER_SCRIPTS);
            loadScripts(SOCIALBAR_SCRIPTS);
            loadNativeBanner();
            loadStandardBanner();
        });
    }
})();
