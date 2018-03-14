process.env.NODE_ENV = 'test';
import mongoose from 'mongoose';
import Item from '../src/models/items';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
chai.use(chaiHttp).should();

describe('Items', () => {
    beforeEach((done) => {
        Items.remove({}, (err) => {
            done();
        });
    });

    describe('/GET Items', () => {
        it('it should GET all the Items', (done) => {
            chai.request(server)
                .get('/items')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });


    describe('/POST Items', () => {
        const item = {};

        it('it should not POST Items without item field', (done) => {
            chai.request(server)
                .post('/items')
                .send(item)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('errors');
                    res.body.errors.should.have.property('item');
                    res.body.errors.item.should.have.property('kind').eql('required');
                    done();
                });
        });
    });
});