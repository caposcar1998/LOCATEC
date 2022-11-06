from controllers.locatec_users.locatec_users import Locatec_users


class UsersHTTP():

    def __init__(self, controller_user: Locatec_users) -> None:
        self.controller_user = controller_user

    def create_user_request(self, body):
        try:
            self.controller_user.create(body)
            return self.response_format(201, "ok")
        except Exception as e:
            return self.response_format(500, str(e))

    def delete_user_request(self, id):
        try:
            self.controller_user.delete(id)
            return self.response_format(200, "deleted")
        except Exception as e:
            return self.response_format(500, str(e))

    def retrieve_user_request(self):
        try:
            res = self.controller_user.readAllUsers()
            return self.response_format(200, res)
        except Exception as e:
            return self.response_format(500, str(e))

    def update_user_request(self, id, body):
        try:
            res = self.controller_user.update(body, id)
            return self.response_format(200, res)
        except Exception as e:
            return self.response_format(500, str(e))

    def retrieve_one_user_request(self, id):
        try:
            id = int(id)
            res =  self.controller_user.readOne(id)
            return self.response_format(200, res)
        except Exception as e:
            return self.response_format(500, str(e))

    def retrieve_one_tuiton(self, tuiton):
        try:
            res = self.controller_user.retrieveTuiton(tuiton)
            return self.response_format(200,res)
        except Exception as e:
            return self.response_format(500, str(e))


    def response_format(self, code, result):
        return {
            "code": code,
            "result": result
    }
