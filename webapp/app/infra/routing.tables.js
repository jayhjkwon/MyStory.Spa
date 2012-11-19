define(
	['vms/vms', './config', 'views/views'],
	function (vms, config, views) {
		return [
            // navigation menu on the top
            {
                viewId: config.viewIds.nav,
                view: views.nav,
                viewModel: vms.nav,
                isMainView: false
            },

			// referral
			{
                viewId: config.viewIds.referral,
                view: views.referral,
                viewModel: vms.referrals,
                route: config.hashes.referral,
                callback: vms.referrals.loadReferrals,
                isMainView: true
			},

			// patient
			{
                viewId: config.viewIds.patient,
                view: views.patient,
                viewModel: vms.patients,
                route: config.hashes.patient,
                callback: vms.patients.loadPatients,
                isMainView: true
			},

			// document
			{
                viewId: config.viewIds.document,
                view: views.document,
                viewModel: vms.document,
                route: config.hashes.document,
                isMainView: true
			}
		];
	}
);