store1 = {
	notebooks : [{id: "id", name : "elad"}, ... ],
	notebooksById: { id1 : { name : "name", shared : [userId1, userId2] , lessons : [ lessonId1, lessonId2, lessonId3], instrument : "name of instrument", years : "number of years student is playing"},
					 id2: {},
					 id3: {},
					 id4: {}
					},
	lessonsById : { Id1 : { date : "23/5/3", content : [ {type : 'videoTasks', shared : 'true/false', id: "id"} , ...]}, .... },

	textTasks: {id1 : {title : "", text : "asdd", networkStatus : 'sent' || 'unsent' || 'uploading'}, id2 : {title : "adaddw", text: 'dww'} },

	videoTasks: {id1 : {url : "ok", youtube: true || false, networkStatus : 'sent' || 'unsent' || 'uploading'},  ... },
	audioTasks: {}
	
	user : {loggedIn : false || true,
			userName : "string",
			email : "string",
			passwordHash : "string"
			status : "teacher" || "student" || "parent"
	}

	network : {uploading : [{type , id}, ... ],
			   downloading : [{type,id}, ... ]
			   failed : [{type , id}]

				}
}



store2 = { 
	notebooks : {
		id : id, 
		name : "name", 
		shared : [userid, userid],
		lessons : [
			{
				date : "23.4.5",
				title : "",
				content : [{
					videoUrl : url, 
					text : text, 
					title : title, 
					audioUrl : url,
					isShared : true || false
					sendStatus : 'sent' || 'unsent' || 'sending' 
				}]
			}

		]
	}

	user = {
		id : id,
		email : email, 
		firstName : name,
		lastName: lastName,
		passwordHash : password,
		instrument : instrument,
		role : 'teacher' || 'parent' || 'student',
		doSince : years
	}

}