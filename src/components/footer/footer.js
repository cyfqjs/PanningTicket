import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";
export default class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <ul>
                    <li>
                        <NavLink to="/home">
                            <i className="iconfont">&#xe664;</i>
                            <span>首页</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/classify">
                            <i className="iconfont">&#xe61e;</i>
                            <span>分类</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/good">
                            <i className="iconfont">&#xe63b;</i>
                            <span>购物车</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order">
                            <i className="iconfont">&#xe737;</i>
                            <span>订单</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/my">
                            <i className="iconfont">&#xe607;</i>
                            <span>我的</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}