/// <reference path='../setup.ts' />

describe('OffersController', () => {

    var ctrlCtor: ng.IControllerService;
    var scope: hotelbooking.OfferScope;

    var offersController: hotelbooking.OffersController;
    var service: hotelbooking.HotelbookingService;

    beforeEach(module('hotelbooking'));

    beforeEach(inject((
        $controller: ng.IControllerService,
        _service_: hotelbooking.HotelbookingService
       ) => {
        ctrlCtor = $controller;
        scope = <hotelbooking.OfferScope>$rootScope.$new();
            service = _service_;
        })
    );

    it('should create itself', () => {
        offersController = ctrlCtor(
            'offersController', {
                $scope: scope,
                hotelbookingService: service
            });

        expect(offersController).to.be.not.null;
        //expect(typeof scope.offer).to.equal('string');
    });

});
