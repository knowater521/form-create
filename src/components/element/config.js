export default function getConfig() {
    return {
        form: {
            inline: false,
            labelPosition: 'right',
            labelSuffix: undefined,
            hideRequiredAsterisk: false,
            labelWidth: '125px',
            showMessage: true,
            inlineMessage: false,
            statusIcon: false,
            validateOnRuleChange: true,
            disabled: false,
            size: undefined,
        },
        row: {
            gutter: 0,
            type: undefined,
            align: undefined,
            justify: undefined,
            tag: 'div'
        },
        upload: {
            onPreview: function (file) {
            },
            onRemove: function (file, fileList) {
            },
            onSuccess: function () {
            },
            onError: function (err, file, fileList) {
            },
            onProgress: function (event, file, fileList) {
            },
            onChange: function (file, fileList) {
            },
            beforeUpload: function (file) {
            },
            beforeRemove: function (file, fileList) {
            },
            allowRemove: true,
            handleIcon: true,
        },
        submitBtn: {
            type: "primary",
            size: "medium",
            plain: false,
            round: false,
            circle: false,
            loading: false,
            disabled: false,
            icon: 'el-icon-upload',
            width: '100%',
            autofocus: false,
            nativeType: "button",
            innerText: "提交",
            show: true,
            col: undefined,
            click: undefined,
        },
        resetBtn: {
            type: "default",
            size: "medium",
            plain: false,
            round: false,
            circle: false,
            loading: false,
            disabled: false,
            icon: 'el-icon-refresh',
            width: '100%',
            autofocus: false,
            nativeType: "button",
            innerText: "重置",
            show: false,
            col: undefined,
            click: undefined,
        },
        iframeHelper: false,
    };
}
