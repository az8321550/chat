angular.module('newpApp')
    .factory('ErrorHandler', function ($q, $location, $timeout, $rootScope, $log) {
        return {
            'request': function (config) {
                return config || $q.when(config);
            },

            'response': function (response) {
                if (!angular.isObject(response.data) && response.data.indexOf('CAS') > -1) {
                    if (window.unloginD) {
                        window.unloginD.close().remove();
                    }
                    window.unloginD = dialog({
                        title: '温馨提示',
                        content: '您的登录超时或者未登录,需要跳转到登录页面吗？',
                        ok: function () {
                            window.location.href = "/lobby/auth/a.html";
                        },
                        okValue: '去登录'
                    });
                    window.unloginD.showModal();
                    setTimeout(function () {
                        window.location.href = "/lobby/auth/a.html";
                    }, 1500)
                } else {
                    return response || $q.when(response);
                }
            }
        };
    });