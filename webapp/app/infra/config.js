define(
    [],     // config should not have any dependencies
    function () {
        var
            storeExpiration = (1000 * 60 * 60 * 24), // 1 day

            viewIds = {
                nav: '#nav-div',
                referral: '#referral-div',
                patient: '#patient-div',
                document: '#document-div'
            },

            hashes = {
                referral: '#/referrals',
                patient: '#/patients',
                document: '#/documents'
            },

            locale = 'ko-kr';  // 'ko-kr' for Korean, 'en' for English

            useMock = true;     // use mock request, not real request

        return {
            viewIds: viewIds,
            hashes: hashes,
            storeExpiration: storeExpiration,
            locale: locale,
            useMock: useMock,
        };
    }
);