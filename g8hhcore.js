(function() {
    'use strict';

    // ========== 配置 ==========
    const CURRENT_VERSION = '1.0';
    const SCRIPT_NAME = '锅巴汉化';

    // ========== 存储 ==========
    function getVal(key, def) {
        try {
            const v = localStorage.getItem('guoba_' + key);
            return v !== null ? JSON.parse(v) : def;
        } catch { return def; }
    }
    function setVal(key, val) {
        localStorage.setItem('guoba_' + key, JSON.stringify(val));
    }

    // ========== 字典（你的 cnItems, cnPrefix, cnPostfix, cnExcludeWhole, cnRegReplace） ==========
    // ... 原样复制 ...
    const cnItems = {
        'Save': '保存',
        'Export': '导出',
        'Import': '导入',
        "": "",
        'I': 'I', 'II': 'II', 'III': 'III', 'IV': 'IV', 'V': 'V',
        'VI': 'VI', 'VII': 'VII', 'VIII': 'VIII', 'X': 'X', 'XI': 'XI',
        'XII': 'XII', 'XIII': 'XIII', 'XIV': 'XIV', 'XV': 'XV', 'XVI': 'XVI',
        'A': 'A', 'B': 'B', 'C': 'C', 'D': 'D', 'E': 'E', 'F': 'F',
        'G': 'G', 'H': 'H', 'I': 'I', 'J': 'J', 'K': 'K', 'L': 'L',
        'M': 'M', 'N': 'N', 'O': 'O', 'P': 'P', 'Q': 'Q', 'R': 'R',
        'S': 'S', 'T': 'T', 'U': 'U', 'V': 'V', 'W': 'W', 'X': 'X',
        'Y': 'Y', 'Z': 'Z',
    };

    const cnPrefix = {
        "\n": "\n",
        "                   ": "", "                  ": "", "                 ": "",
        "                ": "", "               ": "", "              ": "",
        "             ": "", "            ": "", "           ": "",
        "          ": "", "         ": "", "        ": "", "       ": "",
        "      ": "", "     ": "", "    ": "", "   ": "", "  ": " ", " ": " ",
        "\t\t\t": "\t\t\t", "\n\n\t\t": "\n\n\t\t", "\n\t\t": "\n\t\t", "\t": "\t",
        "Show Milestones: ": "显示里程碑：",
        "Autosave: ": "自动保存: ",
        "Offline Prod: ": "离线生产: ",
        "Completed Challenges: ": "完成的挑战: ",
        "High-Quality Tree: ": "高质量树贴图: ",
        "Offline Time: ": "离线时间: ",
        "Theme: ": "主题: ",
        "Anti-Epilepsy Mode: ": "抗癫痫模式：",
        "In-line Exponent: ": "直列指数：",
        "Single-Tab Mode: ": "单标签模式：",
        "Time Played: ": "已玩时长：",
        "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    };

    const cnPostfix = {
        "                   ": "", "                  ": "", "                 ": "",
        "                ": "", "               ": "", "              ": "",
        "             ": "", "            ": "", "           ": "",
        "          ": "", "         ": "", "        ": "", "       ": "",
        "      ": "", "     ": "", "    ": "", "   ": "", "  ": "  ", " ": " ",
        "\n": "\n", "\n\t\t\t": "\n\t\t\t", "\t\t\n\t\t": "\t\t\n\t\t",
        "\t\t\t\t": "\t\t\t\t", "\n\t\t": "\n\t\t", "\t": "\t",
    };

    const cnExcludeWhole = [
        /^(\d+)$/, /^\s*$/, /^([\d\.]+):([\d\.]+)$/, /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
        /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/, /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
        /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/, /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
        /^([\d\.]+)e(\d+)$/, /^([\d\.]+)$/, /^\(([\d\.]+)\)$/, /^([\d\.]+)\%$/,
        /^([\d\.]+)\/([\d\.]+)$/, /^\(([\d\.]+)\/([\d\.]+)\)$/, /^成本(.+)$/,
        /^\(([\d\.]+)\%\)$/, /^([\d\.]+)K$/, /^([\d\.]+)M$/, /^([\d\.]+)B$/,
        /^([\d\.]+) K$/, /^([\d\.]+) M$/, /^([\d\.]+) B$/, /^([\d\.]+)s$/,
        /^([\d\.]+)x$/, /^x([\d\.]+)$/, /^([\d\.,]+)$/, /^\+([\d\.,]+)$/,
        /^\-([\d\.,]+)$/, /^([\d\.,]+)x$/, /^x([\d\.,]+)$/, /^([\d\.,]+) \/ ([\d\.,]+)$/,
        /^([\d\.]+)e([\d\.,]+)$/, /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
        /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/, /^([\d\.]+)e\+([\d\.,]+)$/,
        /^e([\d\.]+)e([\d\.,]+)$/, /^x([\d\.]+)e([\d\.,]+)$/, /^([\d\.]+)e([\d\.,]+)x$/,
        /^[\u4E00-\u9FA5]+$/
    ];

    const cnExcludePostfix = [];
    const cnRegReplace = new Map([]);

    // ========== 翻译函数 ==========
    function cnItem(text, node) { 
        if (typeof (text) != "string" || !text) return text;
        let textori = text;
        let text_prefix = "";
        for (let prefix in cnPrefix) { if (text.startsWith(prefix)) { text_prefix += cnPrefix[prefix]; text = text.substr(prefix.length); } }
        let text_postfix = "";
        for (let postfix in cnPostfix) { if (text.endsWith(postfix)) { text_postfix = cnPostfix[postfix] + text_postfix; text = text.substr(0, text.length - postfix.length); } }
        for (let reg of cnExcludeWhole) { if (reg.test(text.trim())) return textori; }
        if (cnItems[text]) return text_prefix + cnItems[text] + text_postfix;
        for (let [key, value] of cnRegReplace.entries()) {
            if (key.test(text)) return text_prefix + text.replace(key, value) + text_postfix;
        }
        return textori;
    }
    function translateAttribute(el, attrName) {
        const original = el.getAttribute(attrName);
        if (!original) return;
        const translated = cnItem(original, el);
        if (translated !== original) el.setAttribute(attrName, translated);
    }
    function translateNode(rootNode) {
        if (!rootNode) return;
        let walker = document.createTreeWalker(rootNode, NodeFilter.SHOW_TEXT, null, false);
        let textNode;
        while (textNode = walker.nextNode()) {
            let parent = textNode.parentNode;
            if (parent && ['SCRIPT', 'STYLE', 'CODE'].includes(parent.nodeName)) continue;
            let translated = cnItem(textNode.nodeValue, textNode);
            if (textNode.nodeValue !== translated) textNode.nodeValue = translated;
        }
        const elements = rootNode.nodeType === Node.ELEMENT_NODE ? [rootNode, ...rootNode.querySelectorAll('*')] : rootNode.querySelectorAll?.('*') || [];
        for (let el of elements) {
            if (['SCRIPT', 'STYLE'].includes(el.tagName)) continue;
            translateAttribute(el, 'placeholder');
            translateAttribute(el, 'title');
            translateAttribute(el, 'alt');
            translateAttribute(el, 'aria-label');
            translateAttribute(el, 'data-tooltip');
            if (el.tagName === 'INPUT' && ['button', 'submit', 'reset'].includes(el.type)) {
                const val = el.value;
                const tVal = cnItem(val, el);
                if (val !== tVal) el.value = tVal;
            }
            if (el.shadowRoot) translateNode(el.shadowRoot);
        }
    }

    // ========== 控制开关 ==========
    function isEnabled() { return getVal('translation_enabled', true); }
    window.toggleTranslation = function() {
        setVal('translation_enabled', !isEnabled());
        location.reload();
    };

    // ========== 启动 ==========
    function init() {
        if (!isEnabled()) {
            console.log('汉化已关闭');
            return;
        }
        console.log('锅巴汉化：注入中...');
        translateNode(document.body);

        const observer = new MutationObserver(function(mutations) {
            for (let mutation of mutations) {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === Node.TEXT_NODE) {
                            let t = cnItem(node.nodeValue, node);
                            if (node.nodeValue !== t) node.nodeValue = t;
                        } else if (node.nodeType === Node.ELEMENT_NODE) {
                            translateNode(node);
                        }
                    });
                } else if (mutation.type === 'characterData') {
                    let t = cnItem(mutation.target.nodeValue, mutation.target);
                    if (mutation.target.nodeValue !== t) mutation.target.nodeValue = t;
                } else if (mutation.type === 'attributes') {
                    const attr = mutation.attributeName;
                    const target = mutation.target;
                    if (['placeholder', 'title', 'alt', 'aria-label', 'data-tooltip'].includes(attr)) {
                        translateAttribute(target, attr);
                    } else if (attr === 'value' && target.tagName === 'INPUT') {
                        const tVal = cnItem(target.value, target);
                        if (target.value !== tVal) target.value = tVal;
                    }
                }
            }
        });
        observer.observe(document.body, {
            childList: true, subtree: true, characterData: true,
            attributes: true,
            attributeFilter: ['placeholder', 'value', 'title', 'alt', 'aria-label', 'data-tooltip']
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();