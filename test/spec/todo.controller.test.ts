/// <reference path='../setup.ts' />

describe('OffersController', () => {

    var ctrlCtor: ng.IControllerService;
    var scope: components.offers.OfferScope;

    var offersController: components.offers.OffersController;
    var service: components.HotelbookingService;

    beforeEach(angular.module('hotelbookingAM'));

    beforeEach(inject((
        $controller: ng.IControllerService,
        $rootScope: ng.IRootScopeService,
        _service_: components.HotelbookingService
       ) => {
            ctrlCtor = $controller;
            scope = <components.offers.OfferScope>$rootScope.$new();
		    service = _service_;
        })
    );

    it('should create itself', () => {
        offersController = ctrlCtor(
            'offersController', {
                $scope: scope,
                hotelbookingService: service
            });

        //assert(offersController);
        //expect(typeof scope.offer).to.equal('string');
    });

});
