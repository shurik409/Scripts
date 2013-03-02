using UnityEngine;
using System.Collections;

public class AICi : MonoBehaviour {

    public Transform target;
	public int moveSpeed;
	public int rotationSpeed;
	public float maxDistance;
    private float curDistance;
	public int ReactionDistance;
	private float PointDistance;
	public GameObject ObjPoint;
	private Transform Point;
	
	private Transform myTransform;
	
	public AnimationClip a_Idle;
	public float a_IdleSpeed = 1;
	public AnimationClip a_Walk;
	public float a_WalkSpeed = 1;
	
	public enum MonsterStat
	{
	    idle,
	    walkPlayer,
		walkPoint	
	}
	
	private MonsterStat _monsterStat;

    void Awake(){
	myTransform = transform;
    }
	
	void Start () {
		GameObject go = GameObject.FindGameObjectWithTag("Player");
		target = go.transform;
		Point = ObjPoint.transform;
		
		animation[a_Idle.name].speed = a_IdleSpeed;
		animation[a_Walk.name].speed = a_WalkSpeed;
		
		
		if(maxDistance == null) maxDistance = 3;
	}

	

        void Update () {
	    curDistance = Vector3.Distance (target.position, myTransform.position);
		PointDistance = Vector3.Distance (Point.position, myTransform.position);
		
		if((curDistance>=maxDistance) && (curDistance <= ReactionDistance)){
			_monsterStat = MonsterStat.walkPlayer;
		}
		else if((curDistance > ReactionDistance) && (PointDistance > 1))
		{
			_monsterStat = MonsterStat.walkPoint;
		
		}
		else{
			_monsterStat = MonsterStat.idle;
		}
		switch(_monsterStat){
		case MonsterStat.idle:
			Debug.DrawLine (target.position,myTransform.position,Color.yellow);
			animation.CrossFade(a_Idle.name);
			break;
			
		case MonsterStat.walkPlayer:
			Debug.DrawLine (target.position,myTransform.position,Color.red);
			
			myTransform.rotation = Quaternion.Slerp (myTransform.rotation,Quaternion.LookRotation(target.position - myTransform.position),rotationSpeed*Time.deltaTime);
			myTransform.position += myTransform.forward* moveSpeed * Time.deltaTime;
			animation.CrossFade(a_Walk.name);
			break;
			
			case MonsterStat.walkPoint:
			Debug.DrawLine (Point.position,myTransform.position,Color.green);
			Debug.DrawLine (target.position,myTransform.position,Color.yellow);

			
			myTransform.rotation = Quaternion.Slerp (myTransform.rotation,Quaternion.LookRotation(Point.position - myTransform.position),rotationSpeed*Time.deltaTime);
			myTransform.position += myTransform.forward* moveSpeed * Time.deltaTime;
			animation.CrossFade(a_Walk.name);
			break;
		}
		
}
}